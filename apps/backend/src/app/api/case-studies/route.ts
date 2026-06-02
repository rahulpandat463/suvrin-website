import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ─── GET ──────────────────────────────────────────────────────────────────────
// GET /api/case-studies          → fetch all case studies
// GET /api/case-studies?slug=xyz → fetch one by slug
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const study = await prisma.caseStudy.findUnique({ where: { slug } });
      if (!study) {
        return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
      }
      return NextResponse.json({ study });
    }

    const studies = await prisma.caseStudy.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ studies });
  } catch (error) {
    console.error('GET case-studies error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// ─── POST ─────────────────────────────────────────────────────────────────────
// POST /api/case-studies
// Body: all CaseStudy fields
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      slug,
      title,
      subtitle,
      tag,
      imageUrl,
      client,
      industry,
      location,
      overview,
      // Section 2
      clientOverview,
      // Section 3
      challenges,
      // Section 4
      solution,
      // Section 5
      stakeholders,
      // Section 6
      reporting,
      // Section 7
      techStack,
      // Section 8
      keyOutcomes,
      // Section 9
      keyFeatures,
      // Section 10
      results,
      resultsAchieved,
      // Section 11
      conclusion,
    } = body;

    if (!slug || !title) {
      return NextResponse.json(
        { error: 'slug and title are required' },
        { status: 400 }
      );
    }

    const study = await prisma.caseStudy.create({
      data: {
        slug,
        title,
        subtitle,
        tag,
        imageUrl,
        client,
        industry,
        location,
        overview,
        clientOverview,
        challenges,
        solution,
        stakeholders,
        reporting,
        techStack,
        keyOutcomes,
        keyFeatures,
        results,
        resultsAchieved,
        conclusion,
      },
    });

    return NextResponse.json(
      { message: 'Case study created successfully', study },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('POST case-studies error:', error);
    if (error?.code === 'P2002') {
      return NextResponse.json(
        { error: 'A case study with this slug already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// ─── PUT ──────────────────────────────────────────────────────────────────────
// PUT /api/case-studies
// Body: { id, ...fields to update }
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...rest } = body;

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const study = await prisma.caseStudy.update({
      where: { id },
      data: rest,
    });

    return NextResponse.json({ message: 'Updated successfully', study });
  } catch (error) {
    console.error('PUT case-studies error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// ─── DELETE ───────────────────────────────────────────────────────────────────
// DELETE /api/case-studies?id=1
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    await prisma.caseStudy.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE case-studies error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
