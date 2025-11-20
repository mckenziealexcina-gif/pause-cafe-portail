import { NextRequest, NextResponse } from 'next/server';
import { POST } from '../register/route'; // Assuming the POST handler is exported directly

describe('User Registration API', () => {
  it('should register a user successfully with valid data', async () => {
    // Mock NextRequest with a JSON body
    const mockRequest = new NextRequest('http://localhost/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'testuser_api',
        password: 'testpassword_api',
      }),
    });

    // Call the POST handler
    const response = await POST(mockRequest);

    // Assertions
    expect(response.status).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.message).toBe('User registered successfully!');
  });

  // You can add more tests for invalid data, missing fields, etc.
});
