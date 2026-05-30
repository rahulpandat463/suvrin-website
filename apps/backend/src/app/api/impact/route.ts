import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET — Fetch all impact cards
export async function GET() {
  try {
    const impacts = await prisma.impact.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({ success: true, count: impacts.length, impacts });
  } catch (error) {
    console.error('Fetch impacts error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST — Create a new impact card
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { value, description, order } = body;

    if (!value || !description) {
      return NextResponse.json(
        { error: 'value and description are required' },
        { status: 400 }
      );
    }

    const impact = await prisma.impact.create({
      data: {
        value,
        description,
        order: order ?? 0,
      },
    });

    return NextResponse.json(
      { message: 'Impact card created successfully', impact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create impact error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT — Update an existing impact card by id
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, value, description, order } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'id is required for updating' },
        { status: 400 }
      );
    }

    const impact = await prisma.impact.update({
      where: { id },
      data: {
        ...(value && { value }),
        ...(description && { description }),
        ...(order !== undefined && { order }),
      },
    });

    return NextResponse.json({ message: 'Impact card updated successfully', impact });
  } catch (error) {
    console.error('Update impact error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE — Remove an impact card by id
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

    const impact = await prisma.impact.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Impact card deleted successfully', impact });
  } catch (error) {
    console.error('Delete impact error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
