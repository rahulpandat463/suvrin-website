import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const data = await prisma.careerSuvrinLabs.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ suvrinLabs: data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, desc, order } = body;

    const record = await prisma.careerSuvrinLabs.create({
      data: { title, desc, order: order ?? 0 },
    });
    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, desc, order } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.careerSuvrinLabs.update({
      where: { id },
      data: { title, desc, order },
    });
    return NextResponse.json({ message: 'Updated successfully', record });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.careerSuvrinLabs.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
