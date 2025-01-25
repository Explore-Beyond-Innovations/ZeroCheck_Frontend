import connectDB from '@/libs/db';
import { POST } from './route';
import Event from '@/models/Event';
import { NextRequest } from 'next/server';

jest.mock('@/libs/db');
jest.mock('@/models/Event');

describe('POST /api/events/create - Create Event', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create an event successfully', async () => {
    (connectDB as jest.Mock).mockResolvedValue(null);

    const mockSave = jest.fn().mockResolvedValue({
      eventId: 'eventId123',
      name: 'Test Event',
      startDate: Date.now(),
      endDate: Date.now() + 3600000,
      location: 'Test Location',
      description: 'This is a test event',
      cost: 50,
      capacity: 100,
      tags: ['tech', 'conference']
    });
    Event.prototype.save = mockSave;

    const request = {
      json: async () => ({
        name: 'Test Event',
        startDate: Date.now(),
        endDate: Date.now() + 3600000,
        location: 'Test Location',
        description: 'This is a test event',
        cost: 50,
        capacity: 100,
        tags: ['tech', 'conference']
      })
    } as NextRequest;

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body?.result).toBe('success');
    expect(body?.event.eventId).toBe('eventId123');
  });

  it('should return 400 if required fields are missing', async () => {
    const response = await POST({
      json: async () => ({
        name: ''
      })
    } as NextRequest);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      result: 'error',
      message: 'Missing required fields'
    });
  });

  it('should return 400 if startDate is not earlier than endDate', async () => {
    const reques = {
      json: async () => ({
        name: 'Test Event',
        startDate: Date.now(),
        endDate: Date.now() - 3600000, // Invalid date
        location: 'Test Location',
        description: 'Test Description',
        cost: 10,
        capacity: 100,
        tags: ['test', 'event']
      })
    } as NextRequest;

    const response = await POST(reques);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      result: 'error',
      message: 'startDate must be earlier than endDate'
    });
  });

  it('should return 400 if tags is not an array of strings', async () => {
    const request = {
      json: async () => ({
        name: 'Test Event',
        startDate: 1704057600,
        endDate: 1704061200,
        location: 'Test Location',
        description: 'Test Description',
        cost: 10,
        capacity: 100,
        tags: 'invalid-tag'
      })
    } as NextRequest;

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      result: 'error',
      message: 'Tags must be an array of strings'
    });
  });

  it('should return 500 if an error occurs', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    (connectDB as jest.Mock).mockRejectedValue(
      new Error('Database connection failed')
    );

    const request = {
      json: async () => ({
        name: 'Test Event',
        startDate: Date.now(),
        endDate: Date.now() + 3600000,
        location: 'Test Location',
        description: 'This is a test event',
        cost: 50,
        capacity: 100,
        tags: ['tech', 'conference']
      })
    } as NextRequest;

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({
      result: 'error',
      message: 'Database connection failed'
    });
  });
});
