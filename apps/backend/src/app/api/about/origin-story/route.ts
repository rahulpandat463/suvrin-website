import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch origin story
export async function GET(req: Request) {
  try {
    const data = await prisma.originStory.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ originStory: data });
  } catch (error) {
    console.error('GET originStory error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create origin story
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { heading, paragraph1, paragraph2 } = body;

    if (!heading || !paragraph1 || !paragraph2) {
      return NextResponse.json({ error: 'heading, paragraph1 and paragraph2 are required' }, { status: 400 });
    }

    const record = await prisma.originStory.create({
      data: { heading, paragraph1, paragraph2 },
    });

    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    console.error('POST originStory error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update origin story
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, heading, paragraph1, paragraph2 } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.originStory.update({
      where: { id },
      data: { heading, paragraph1, paragraph2 },
    });

    return NextResponse.json({ message: 'Updated successfully', record });
  } catch (error) {
    console.error('PUT originStory error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete origin story
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.originStory.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE originStory error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
