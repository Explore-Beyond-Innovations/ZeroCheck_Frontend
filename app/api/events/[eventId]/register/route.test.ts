import { POST } from './route';
import Event from '@/models/Event';
import User from '@/models/User';
import connectDB from '@/libs/db';
import { NextRequest } from 'next/server';

jest.mock('@/libs/db');
jest.mock('@/models/User');
jest.mock('@/models/Event', () => ({
  __esModule: true,
  default: {
    findOne: jest.fn(),
    find: jest.fn().mockImplementation(() => ({
      limit: jest.fn().mockResolvedValue([
        { eventId: 'event124', tags: ['music'] },
        { eventId: 'event125', tags: ['festival'] }
      ])
    }))
  }
}));

describe('POST /api/events/[eventId]/register', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should register user for an event successfully', async () => {
    (connectDB as jest.Mock).mockResolvedValue(null);

    const user = {
      userId: 'user123',
      registeredEvents: [],
      save: jest.fn().mockResolvedValue(null)
    };

    const event = {
      eventId: 'uniqueEvent123',
      name: 'Test Event',
      startDate: 1714880400000,
      endDate: 1714884000000,
      location: 'Test Location',
      description: 'This is a test event.',
      cost: 0,
      capacity: 100,
      tags: ['test'],
      attendees: [],
      save: jest.fn().mockResolvedValue(null)
    };

    (User.findOne as jest.Mock).mockResolvedValue(user);
    (Event.findOne as jest.Mock).mockResolvedValue(event);

    const request = {
      json: async () => ({
        userId: 'testUser123'
      })
    } as NextRequest;

    const response = await POST(request, {
      params: { eventId: 'uniqueEvent123' }
    });

    const result = await response.json();

    expect(response.status).toBe(200);
    expect(event.attendees).toContain('testUser123');
    expect(result.message).toBe('User registered successfully');
    expect(result.event.eventId).toBe('uniqueEvent123');
  });

  it('should return 404 if the event does not exist', async () => {
    const eventId = 'inuniqueEvent123';
    const request = {
      json: async () => ({ userId: '12345' })
    } as NextRequest;

    (connectDB as jest.Mock).mockResolvedValue(null);
    (Event.findOne as jest.Mock).mockResolvedValue(null);

    const response = await POST(request, {
      params: { eventId }
    });
    const result = await response.json();

    expect(response.status).toBe(404);
    expect(result).toEqual({
      result: 'error',
      message: 'Event not found'
    });
  });

  it('should return 400 if user is already registered', async () => {
    const eventId = 'uniqueEvent123';

    const user = {
      userId: '12345',
      registeredEvents: [
        {
          eventId,
          regiteredAt: Date.now()
        }
      ],
      save: jest.fn().mockResolvedValue(null)
    };

    const event = {
      eventId,
      name: 'Test Event',
      capacity: 100,
      attendees: ['12345'],
      save: jest.fn()
    };

    (connectDB as jest.Mock).mockResolvedValue(null);
    (User.findOne as jest.Mock).mockResolvedValue(user);
    (Event.findOne as jest.Mock).mockResolvedValue(event);

    const request = {
      json: async () => ({ userId: '12345' })
    } as NextRequest;

    const response = await POST(request, {
      params: { eventId: eventId }
    });
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result).toEqual({
      result: 'error',
      message: 'User already registered for this event'
    });
  });

  it('should return 500 if an error occurs during registration', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    (connectDB as jest.Mock).mockRejectedValue(
      new Error('Database connection failed')
    );

    const eventId = 'uniqueEvent123';
    const request = {
      json: async () => ({ userId: '12345' })
    } as NextRequest;

    const response = await POST(request, {
      params: { eventId }
    });
    const result = await response.json();

    expect(response.status).toBe(500);
    expect(result).toEqual({
      result: 'error',
      message: 'Database connection failed'
    });
  });
});
