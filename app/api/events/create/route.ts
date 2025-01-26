import connectDB from '@/libs/db';
import Event from '@/models/Event';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

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
      return NextResponse.json(
        { result: 'error', message: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (startDate >= endDate) {
      return NextResponse.json(
        { result: 'error', message: 'startDate must be earlier than endDate' },
        { status: 400 }
      );
    }

    if (
      tags &&
      (!Array.isArray(tags) || tags.some(tag => typeof tag !== 'string'))
    ) {
      return NextResponse.json(
        { result: 'error', message: 'Tags must be an array of strings' },
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
    const savedEvent = await event.save();

    return NextResponse.json(
      {
        result: 'success',
        event: savedEvent
      },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      {
        result: 'error',
        message: error.message
      },
      { status: 500 }
    );
  }
}
