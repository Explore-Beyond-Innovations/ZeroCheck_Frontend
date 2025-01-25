interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  address: string;
  createdAt: string;
}

const users: User[] = [
  {
    id: 1,
    username: "john_doe",
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St",
    createdAt: "2022-01-10T09:30:00Z",
  },
  {
    id: 2,
    username: "jane_smith",
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Oak Ave",
    createdAt: "2021-05-20T14:20:00Z",
  },
  {
    id: 3,
    username: "charlie_brown",
    name: "Charlie Brown",
    email: "charlie@example.com",
    address: "789 Pine Rd",
    createdAt: "2023-03-15T12:00:00Z",
  },
];

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const username = searchParams.get("username");
    const address = searchParams.get("address");

    // Filter users based on query parameters
    let filteredUsers = users;

    if (userId) {
      filteredUsers = filteredUsers.filter(
        (user) => user.id.toString() === userId
      );
    }

    if (username) {
      filteredUsers = filteredUsers.filter(
        (user) => user.username.toLowerCase() === username.toLowerCase()
      );
    }

    if (address) {
      filteredUsers = filteredUsers.filter(
        (user) => user.address.toLowerCase() === address.toLowerCase()
      );
    }

    // If no users are found after filtering, return 404
    if (filteredUsers.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User not found",
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Structure the response
    const formattedUsers = filteredUsers.map((user) => ({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      address: user.address,
      createdAt: user.createdAt,
    }));

    return new Response(
      JSON.stringify({
        success: true,
        data: formattedUsers,
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
        message: "An error occurred while fetching user data.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
