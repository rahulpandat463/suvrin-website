import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const ALLOWED_EXTENSIONS = ['.jpeg', '.jpg', '.png', '.webp'];

export async function GET() {
  try {
    // Check if DB already has records
    const existingCount = await prisma.workedWith.count();

    if (existingCount === 0) {
      // Scan public folder and seed DB on first request
      const publicDir = path.join(process.cwd(), 'public');

      if (!fs.existsSync(publicDir)) {
        return NextResponse.json(
          { error: 'Public directory not found' },
          { status: 404 }
        );
      }

      const allFiles = fs.readdirSync(publicDir);

      const imageFiles = allFiles.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return ALLOWED_EXTENSIONS.includes(ext);
      });

      // Save all image paths to DB
      await prisma.workedWith.createMany({
        data: imageFiles.map((file) => ({
          filename: file,
          url: `/${file}`,
          extension: path.extname(file).toLowerCase().replace('.', ''),
        })),
        skipDuplicates: true,
      });
    }

    // Always return from DB
    const images = await prisma.workedWith.findMany({
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({
      success: true,
      count: images.length,
      images,
    });
  } catch (error) {
    console.error('WorkedWith images fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE — Remove a WorkedWith image record by id
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'id is required for deleting (e.g. ?id=1)' },
        { status: 400 }
      );
    }

    const image = await prisma.workedWith.delete({
      where: { id: parseInt(id) },
    });

    // Optional: if it was a local file previously, try to delete it just in case
    if (image && !image.url.startsWith('data:')) {
      const filePath = path.join(process.cwd(), 'public', image.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    return NextResponse.json({ message: 'Image record deleted successfully', image });
  } catch (error) {
    console.error('Delete WorkedWith error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST — Upload a new WorkedWith image (Stores as Base64 in Database)
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const ext = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json({ error: 'Invalid file type. Allowed: .jpeg, .jpg, .png, .webp' }, { status: 400 });
    }

    // Convert file to Base64
    const buffer = Buffer.from(await file.arrayBuffer());
    const mimeType = file.type || `image/${ext.replace('.', '')}`;
    const base64String = `data:${mimeType};base64,${buffer.toString('base64')}`;

    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    // Save Base64 string directly in Prisma Database
    const newImage = await prisma.workedWith.create({
      data: {
        filename,
        url: base64String, // Storing base64 instead of file path
        extension: ext.replace('.', ''),
      },
    });

    return NextResponse.json({ success: true, image: newImage }, { status: 201 });
  } catch (error) {
    console.error('Upload WorkedWith error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
