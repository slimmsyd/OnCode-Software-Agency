import { NextResponse } from 'next/server';
import { db } from '@/app/lib/db';


const PYTHON_API_URL = process.env.PYTHON_API_URL || 'http://localhost:8000';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, company, idea } = body;

    // Save to database
    const submission = await db.ideaSubmission.create({
      data: {
        email,
        phone,
        company,
        idea,
      },
    });

    // Forward to Python backend
    const pythonResponse = await fetch(`${PYTHON_API_URL}/analyze-idea`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const pythonData = await pythonResponse.json();

    // If everything succeeded, return success response
    return NextResponse.json({ 
      success: true,
      message: pythonData.message,
      submissionId: submission.id 
    });

  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' }, 
      { status: 500 }
    );
  }
} 