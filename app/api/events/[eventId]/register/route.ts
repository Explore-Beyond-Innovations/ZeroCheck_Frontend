import connectDB from '@/libs/db';
import User from '@/models/User';
import Event from '@/models/Event';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    await connectDB();
    const { eventId } = params;

    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { result: 'error', message: 'Missing userId' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ userId });
    if (!user) {
      return NextResponse.json(
        { result: 'error', message: 'User not found' },
        { status: 404 }
      );
    }

    const event = await Event.findOne({ eventId });
    if (!event) {
      return NextResponse.json(
        { result: 'error', message: 'Event not found' },
        { status: 404 }
      );
    }

    // Check if the user is already registered for the event
    const isAlreadyRegistered = user.registeredEvents.some(
      (registration: { eventId: string }) => registration.eventId === eventId
    );

    if (isAlreadyRegistered) {
      return NextResponse.json(
        { result: 'error', message: 'User already registered for this event' },
        { status: 400 }
      );
    }

    event.attendees.push(userId);
    await event.save();

    user.registeredEvents.push({ eventId, registeredAt: Date.now() });
    await user.save();

    // Suggest similar events based on tags
    const similarEvents = await Event.find({
      eventId: { $ne: eventId },
      tags: { $in: event?.tags },
      startDate: { $gte: Date.now() }
    }).limit(5);

    return NextResponse.json(
      {
        result: 'success',
        message: 'User registered successfully',
        event,
        suggestions: similarEvents
      },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Failed to register event', error);

    return NextResponse.json(
      {
        result: 'error',
        message: error.message
      },
      { status: 500 }
    );
  }
}
