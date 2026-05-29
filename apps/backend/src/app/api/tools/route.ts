import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET — Fetch all tools
export async function GET() {
  try {
    const tools = await prisma.tool.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({ success: true, count: tools.length, tools });
  } catch (error) {
    console.error('Fetch tools error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST — Create a new tool
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, type, content, order } = body;

    if (!name || !type || !content) {
      return NextResponse.json(
        { error: 'name, type, and content are required' },
        { status: 400 }
      );
    }

    const tool = await prisma.tool.create({
      data: {
        name,
        type,
        content,
        order: order ?? 0,
      },
    });

    return NextResponse.json(
      { message: 'Tool created successfully', tool },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create tool error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT — Update an existing tool by id
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, type, content, order } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'id is required for updating' },
        { status: 400 }
      );
    }

    const tool = await prisma.tool.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(type && { type }),
        ...(content && { content }),
        ...(order !== undefined && { order }),
      },
    });

    return NextResponse.json({ message: 'Tool updated successfully', tool });
  } catch (error) {
    console.error('Update tool error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete a tool by id
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

    const tool = await prisma.tool.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Tool deleted successfully', tool });
  } catch (error) {
    console.error('Delete tool error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
