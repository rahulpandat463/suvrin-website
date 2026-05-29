import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET — Fetch all testimonials
export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({ success: true, count: testimonials.length, testimonials });
  } catch (error) {
    console.error('Fetch testimonials error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST — Create a new testimonial
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, role, image, initial, company, text, metrics, order } = body;

    if (!name || !role || !text) {
      return NextResponse.json(
        { error: 'name, role, and text are required' },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        role,
        image,
        initial,
        company,
        text,
        metrics: metrics || [],
        order: order ?? 0,
      },
    });

    return NextResponse.json(
      { message: 'Testimonial created successfully', testimonial },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create testimonial error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT — Update an existing testimonial
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, role, image, initial, company, text, metrics, order } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'id is required for updating' },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(role && { role }),
        ...(image !== undefined && { image }),
        ...(initial !== undefined && { initial }),
        ...(company !== undefined && { company }),
        ...(text && { text }),
        ...(metrics !== undefined && { metrics }),
        ...(order !== undefined && { order }),
      },
    });

    return NextResponse.json({ message: 'Testimonial updated successfully', testimonial });
  } catch (error) {
    console.error('Update testimonial error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete a testimonial
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

    const testimonial = await prisma.testimonial.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Testimonial deleted successfully', testimonial });
  } catch (error) {
    console.error('Delete testimonial error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
