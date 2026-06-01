import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all locations (ordered)
export async function GET(req: Request) {
  try {
    const data = await prisma.globalPresence.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ globalPresence: data });
  } catch (error) {
    console.error('GET globalPresence error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create a location
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { city, address, desc, order } = body;

    if (!city) {
      return NextResponse.json({ error: 'city is required' }, { status: 400 });
    }

    const record = await prisma.globalPresence.create({
      data: { city, address, desc, order: order ?? 0 },
    });

    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    console.error('POST globalPresence error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update a location
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, city, address, desc, order } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.globalPresence.update({
      where: { id },
      data: { city, address, desc, order },
    });

    return NextResponse.json({ message: 'Updated successfully', record });
  } catch (error) {
    console.error('PUT globalPresence error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete a location
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.globalPresence.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE globalPresence error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
