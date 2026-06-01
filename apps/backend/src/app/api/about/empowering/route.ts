import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all Empowering Business sections
export async function GET(req: Request) {
  try {
    const data = await prisma.empoweringBusiness.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ empowering: data });
  } catch (error) {
    console.error('GET empowering error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create Empowering Business section
// features is an array: [{title: string, desc: string}]
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { heading, description, features, imageUrl, ctaText, ctaLink } = body;

    if (!heading || !description) {
      return NextResponse.json({ error: 'heading and description are required' }, { status: 400 });
    }

    const record = await prisma.empoweringBusiness.create({
      data: {
        heading,
        description,
        features: features ?? [],
        imageUrl,
        ctaText,
        ctaLink,
      },
    });

    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    console.error('POST empowering error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update Empowering Business section
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, heading, description, features, imageUrl, ctaText, ctaLink } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.empoweringBusiness.update({
      where: { id },
      data: { heading, description, features, imageUrl, ctaText, ctaLink },
    });

    return NextResponse.json({ message: 'Updated successfully', record });
  } catch (error) {
    console.error('PUT empowering error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete Empowering Business section
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.empoweringBusiness.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE empowering error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
