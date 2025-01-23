interface Participant {
  id: number;
  name: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  participants: Participant[];
}

const events: Event[] = [
  {
    id: 1,
    title: "Tech Conference 2025",
    description: "A conference about the latest in tech.",
    category: "Technology",
    date: "2025-02-15T10:00:00Z",
    participants: [
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
    ],
  },
  {
    id: 2,
    title: "Art Expo",
    description: "An exhibition of modern art.",
    category: "Art",
    date: "2025-01-30T12:00:00Z",
    participants: [{ id: 3, name: "Charlie" }],
  },
  {
    id: 3,
    title: "Music Festival",
    description: "A festival featuring live performances.",
    category: "Music",
    date: "2025-03-10T18:00:00Z",
    participants: [],
  },
];

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const userId = searchParams.get("userId");

    // Filter events
    let filteredEvents = events;

    if (category) {
      filteredEvents = filteredEvents.filter(
        (event) => event.category === category
      );
    }

    if (startDate || endDate) {
      filteredEvents = filteredEvents.filter((event) => {
        const eventDate = new Date(event.date);
        if (startDate && eventDate < new Date(startDate)) return false;
        if (endDate && eventDate > new Date(endDate)) return false;
        return true;
      });
    }

    if (userId) {
      filteredEvents = filteredEvents.filter((event) =>
        event.participants.some(
          (participant) => participant.id.toString() === userId
        )
      );
    }

    // Structure response
    const formattedEvents = filteredEvents.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      category: event.category,
      date: event.date,
      isUpcoming: new Date(event.date) > new Date(),
      participants: event.participants.map((user) => ({
        id: user.id,
        name: user.name,
      })),
    }));

    return new Response(
      JSON.stringify({
        success: true,
        data: formattedEvents,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while fetching events.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
