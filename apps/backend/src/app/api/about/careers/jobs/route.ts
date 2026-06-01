import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const data = await prisma.careerJob.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ jobs: data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, category, categoryDesc, location, type, desc, dotColor, badgeBg, order } = body;

    const record = await prisma.careerJob.create({
      data: { 
        title, category, categoryDesc, location, type, desc, 
        dotColor: dotColor || "bg-[#0546e0]", 
        badgeBg: badgeBg || "bg-[#f0f4ff]", 
        order: order ?? 0 
      },
    });
    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, category, categoryDesc, location, type, desc, dotColor, badgeBg, order } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.careerJob.update({
      where: { id },
      data: { title, category, categoryDesc, location, type, desc, dotColor, badgeBg, order },
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

    await prisma.careerJob.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
