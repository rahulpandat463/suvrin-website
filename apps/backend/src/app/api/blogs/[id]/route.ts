import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: rawId } = await params;
    const isId = !isNaN(Number(rawId));
    
    let blog;
    if (isId) {
      blog = await prisma.blog.findUnique({
        where: { id: parseInt(rawId) },
      });
    } else {
      blog = await prisma.blog.findUnique({
        where: { slug: rawId },
      });
    }

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error('Fetch blog error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: rawId } = await params;
    const id = parseInt(rawId);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid blog ID' },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { slug, tag, date, title, description, intro, image, content } = body;

    const blog = await prisma.blog.update({
      where: { id },
      data: {
        slug,
        tag,
        date,
        title,
        description,
        intro,
        image,
        content,
      },
    });

    return NextResponse.json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    console.error('Update blog error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: rawId } = await params;
    const id = parseInt(rawId);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid blog ID' },
        { status: 400 }
      );
    }

    await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Delete blog error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
