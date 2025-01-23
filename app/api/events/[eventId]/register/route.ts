import connectDB from '@/libs/db';
import User from '@/models/User';
import Event from '@/models/Event';
import { NextRequest } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { eventId: string } }
) {
  await connectDB();
  const { eventId } = params;

  try {
    const { userId } = await req.json();

    if (!userId) {
      return new Response(JSON.stringify({ message: 'Missing userId' }), {
        status: 400
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), {
        status: 404
      });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return new Response(JSON.stringify({ message: 'Event not found' }), {
        status: 404
      });
    }

    user.registeredEvents.push({ eventId, registeredAt: new Date() });
    await user.save();

    // Suggest similar events based on the same category and upcoming date
    const similarEvents = await Event.find({
      _id: { $ne: eventId },
      category: event.category,
      date: { $gte: new Date() }
    }).limit(5);

    return new Response(
      JSON.stringify({
        message: 'User registered to event successfully',
        suggestions: similarEvents
      }),
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: 'Failed to register event',
        error: error.message
      }),
      { status: 500 }
    );
  }
}
