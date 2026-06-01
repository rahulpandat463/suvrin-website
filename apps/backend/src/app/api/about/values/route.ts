import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all values (ordered)
export async function GET(req: Request) {
  try {
    const data = await prisma.ourValues.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ values: data });
  } catch (error) {
    console.error('GET values error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create a value
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, desc, order } = body;

    if (!title || !desc) {
      return NextResponse.json({ error: 'title and desc are required' }, { status: 400 });
    }

    const record = await prisma.ourValues.create({
      data: { title, desc, order: order ?? 0 },
    });

    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    console.error('POST values error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update a value
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, desc, order } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.ourValues.update({
      where: { id },
      data: { title, desc, order },
    });

    return NextResponse.json({ message: 'Updated successfully', record });
  } catch (error) {
    console.error('PUT values error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete a value
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.ourValues.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE values error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
