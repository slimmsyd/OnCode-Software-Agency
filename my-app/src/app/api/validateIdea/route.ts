import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import nodemailer from 'nodemailer';

const APIKEY = process.env.OPENAI_API_KEY;

if (!APIKEY) {
  throw new Error('OPENAI_API_KEY is not set in environment variables');
}

const openai = new OpenAI({ apiKey: APIKEY });

export async function POST(request: Request) {
  try {
    const { email, phone, company, idea } = await request.json();

    // Validate required fields
    if (!email || !phone || !company || !idea) {
      return NextResponse.json(
        { error: 'Missing required fields: email, phone, company, and idea are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // Generate personalized response using OpenAI
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: `You are the OnCode AI Assistant, representing OnCode - an end-to-end software development agency that specializes in building MVPs (Minimum Viable Products) quickly and efficiently.

Your task is to validate and provide feedback on a potential client's business idea. You should:
1. Acknowledge their idea and company
2. Provide constructive feedback on the idea
3. Explain how OnCode can help bring their vision to life
4. Be encouraging and professional
5. Keep the response concise but warm
6. Include contact information and next steps

Important Contact Information:
- Book a consultation: https://calendly.com/0ncode-info/30min
- Personal contact: 423-933-5112

Format your response in HTML with the following structure:
<div class="response-container">
  <div class="greeting">
    Hello {email},
  </div>
  
  <div class="acknowledgment">
    [Acknowledge their idea and show understanding]
  </div>
  
  <div class="feedback">
    <h3>Feedback:</h3>
    [Provide constructive feedback on their idea]
  </div>
  
  <div class="how-we-can-help">
    <h3>How OnCode Can Help:</h3>
    [Explain how OnCode can help bring their vision to life]
  </div>
  
  <div class="next-steps">
    <h3>Next Steps:</h3>
    [Include clear call to action]
  </div>
  
  <div class="signature">
    Warm regards,<br/>
    Sydney Sanders<br/>
    CEO, OnCode Engineer
  </div>
  
  <div class="contact-info">
    <p><strong>Book a consultation:</strong> <a href="https://calendly.com/0ncode-info/30min">Schedule a call</a></p>
    <p><strong>Personal contact:</strong> 423-933-5112</p>
  </div>
</div>

Remember to:
- Be specific about their idea and company
- Highlight OnCode's expertise in MVP development
- Mention our ability to build MVPs in weeks, not months
- Keep the tone professional yet friendly
- Include both the Calendly link and personal contact number
- End with a clear call to action to either book a call or reach out personally
- Use proper HTML formatting with divs and classes
- Include your name as Sydney Sanders, CEO, OnCode Engineer`
      },
      {
        role: "user",
        content: `Company: ${company}
Idea: ${idea}

Please provide a personalized response validating this idea and explaining how OnCode can help.`
      }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0].message.content;

    console.log("AI Response within the backend data", aiResponse);


    return NextResponse.json({ 
      success: true,
      aiResponse,
      message: 'Idea validation completed and emails sent successfully'
    });

  } catch (error) {
    console.error('Failed to process idea validation:', error);
    return NextResponse.json(
      { error: 'Failed to process idea validation' },
      { status: 500 }
    );
  }
} 