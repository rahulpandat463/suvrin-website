import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all WhoWeAre descriptions
export async function GET(req: Request) {
  try {
    const data = await prisma.whoWeAreDescription.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ description: data });
  } catch (error) {
    console.error('GET description error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new description
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { paragraph1, paragraph2 } = body;

    if (!paragraph1 || !paragraph2) {
      return NextResponse.json({ error: 'paragraph1 and paragraph2 are required' }, { status: 400 });
    }

    const record = await prisma.whoWeAreDescription.create({
      data: { paragraph1, paragraph2 },
    });

    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    console.error('POST description error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update description
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, paragraph1, paragraph2 } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.whoWeAreDescription.update({
      where: { id },
      data: { paragraph1, paragraph2 },
    });

    return NextResponse.json({ message: 'Updated successfully', record });
  } catch (error) {
    console.error('PUT description error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete description
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.whoWeAreDescription.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE description error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
