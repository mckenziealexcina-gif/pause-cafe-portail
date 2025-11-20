import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // In a real application, you would:
    // 1. Validate input (e.g., username not empty, password strong)
    // 2. Hash the password
    // 3. Store the user in a database
    // 4. Handle potential errors (e.g., username already exists)

    console.log('User registration attempt:', { username, password: '***' });

    // Simulate successful registration
    return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
