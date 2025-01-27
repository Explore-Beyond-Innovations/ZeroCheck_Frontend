import connectDB from '@/libs/db';
import User from '@/models/User';
import { GET } from './route';
import { NextRequest } from 'next/server';

jest.mock('@/libs/db');
jest.mock('@/models/User');

describe('GET /api/users - Fetch User by ID, Username, or Address', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a user by userId successfully', async () => {
    (connectDB as jest.Mock).mockResolvedValue(null);

    const mockFindOne = jest.fn().mockResolvedValue({
      userId: 'userId123',
      name: 'Test User',
      email: 'testuser@example.com',
      username: 'testuser',
      address: '0x123abc456def7890',
      registeredEvents: []
    });
    User.findOne = mockFindOne;

    const request = {
      url: 'http://localhost/api/users?id=userId123'
    } as NextRequest;

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body?.success).toBe(true);
    expect(body?.message.userId).toBe('userId123');
  });

  it('should return a user by address successfully', async () => {
    (connectDB as jest.Mock).mockResolvedValue(null);

    const mockFindOne = jest.fn().mockResolvedValue({
      userId: 'userId123',
      name: 'Test User',
      email: 'testuser@example.com',
      username: 'testuser',
      address: '0x123abc456def7890',
      registeredEvents: []
    });
    User.findOne = mockFindOne;

    const request = {
      url: 'http://localhost/api/users?address=0x123abc456def7890'
    } as NextRequest;

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body?.success).toBe(true);
    expect(body?.message.address).toBe('0x123abc456def7890');
  });

  it('should return a user by username successfully', async () => {
    (connectDB as jest.Mock).mockResolvedValue(null);

    const mockFindOne = jest.fn().mockResolvedValue({
      userId: 'userId123',
      name: 'Test User',
      email: 'testuser@example.com',
      username: 'testuser',
      address: '0x123abc456def7890',
      registeredEvents: []
    });
    User.findOne = mockFindOne;

    const request = {
      url: 'http://localhost/api/users?username=testuser'
    } as NextRequest;

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body?.success).toBe(true);
    expect(body?.message.username).toBe('testuser');
  });

  it('should return 400 if no query parameters are provided', async () => {
    const request = {
      url: 'http://localhost/api/users'
    } as NextRequest;

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      success: false,
      message: "Please provide at least one query parameter: id, username, or address."
    });
  });

  it('should return 404 if no user is found for the provided query', async () => {
    (connectDB as jest.Mock).mockResolvedValue(null);

    const mockFindOne = jest.fn().mockResolvedValue(null);
    User.findOne = mockFindOne;

    const request = {
      url: 'http://localhost/api/users?username=nonexistentuser'
    } as NextRequest;

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body).toEqual({
      success: false,
      message: 'User not found.'
    });
  });

  it('should return 500 if an error occurs during database operation', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    (connectDB as jest.Mock).mockRejectedValue(new Error('Database connection failed'));

    const request = {
      url: 'http://localhost/api/users?id=userId123'
    } as NextRequest;

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({
      success: false,
      message: 'An internal error occurred.'
    });
  });
});
