import connectDB from '@/libs/db';
import Event from '@/models/Event';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const {
      name,
      startDate,
      endDate,
      location,
      description,
      cost,
      capacity,
      tags
    } = await req.json();

    if (!name || !startDate || !endDate || !location || !description) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400 }
      );
    }

    const event = new Event({
      name,
      startDate,
      endDate,
      location,
      description,
      cost: cost ?? 0,
      capacity: capacity ?? 0,
      tags: tags ?? []
    });
    await event.save();

    return new Response(
      JSON.stringify({ message: 'Event created successfully', event }),
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: 'Failed to create event',
        error: error.message
      }),
      { status: 500 }
    );
  }
}
