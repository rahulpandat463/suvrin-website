import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const heros = await prisma.hero.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ heros });
  } catch (error) {
    console.error('Fetch heros error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { heading1, heading2, subheading, description, button1, button2 } = body;

    if (!heading1) {
      return NextResponse.json(
        { error: 'Heading 1 is required' },
        { status: 400 }
      );
    }

    const hero = await prisma.hero.create({
      data: {
        heading1,
        heading2,
        subheading,
        button1,
        button2,
      },
    });

    return NextResponse.json(
      { message: 'Hero section created successfully', hero },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create hero error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, heading1, heading2, subheading, button1, button2 } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Hero ID is required for editing' },
        { status: 400 }
      );
    }

    const hero = await prisma.hero.update({
      where: { id },
      data: {
        heading1,
        heading2,
        subheading,
        button1,
        button2,
      },
    });

    return NextResponse.json({ message: 'Hero section updated successfully', hero });
  } catch (error) {
    console.error('Update hero error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
