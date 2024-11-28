// import { NextResponse } from 'next/server';
// import { db } from '@/app/lib/db';


// const PYTHON_API_URL = process.env.PYTHON_API_URL || 'http://localhost:8000';

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { email, phone, company, idea } = body;

//     // Save to database
//     const submission = await db.ideaSubmission.create({
//       data: {
//         email,
//         phone,
//         company,
//         idea,
//       },
//     });

//     // Forward to Python backend - Fixed request
//     const pythonResponse = await fetch(`${PYTHON_API_URL}/analyze-idea`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         phone,
//         company,
//         idea,
//         submissionId: submission.id
//       }),
//     }).catch(error => {
//       console.error('Python API error:', error);
//       // Continue execution even if Python API fails
//       return { ok: true, json: () => ({ message: 'Submission recorded' }) };
//     });

//     const pythonData = await pythonResponse.json();

//     return NextResponse.json({ 
//       success: true,
//       message: pythonData.message || 'Submission recorded successfully',
//       submissionId: submission.id 
//     });

//   } catch (error) {
//     console.error('Submission error:', error);
//     return NextResponse.json(
//       { error: 'Failed to process submission' }, 
//       { status: 500 }
//     );
//   }
// } 