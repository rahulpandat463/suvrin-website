import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const data = await prisma.careerWorkThatMattersDesc.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ description: data });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { heading, description } = body;

    const record = await prisma.careerWorkThatMattersDesc.create({
      data: { heading, description },
    });
    return NextResponse.json({ message: 'Created successfully', record }, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, heading, description } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const record = await prisma.careerWorkThatMattersDesc.update({
      where: { id },
      data: { heading, description },
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

    await prisma.careerWorkThatMattersDesc.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
