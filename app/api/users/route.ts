import { NextResponse } from "next/server";
// Creating a custom user type
interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  address: string;
  createdAt: string;
}

// Creating Array of users to minic data from the database

const users: User[] = [
  {
    id: 1,
    username: "john_doe",
    name: "John Doe",
    email: "john@example.com",
    address: "0x1234567890abcdef1234567890abcdef12345678",
    createdAt: "2022-01-10T09:30:00Z",
  },
  {
    id: 2,
    username: "jane_smith",
    name: "Jane Smith",
    email: "jane@example.com",
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
    createdAt: "2021-05-20T14:20:00Z",
  },
  {
    id: 3,
    username: "charlie_brown",
    name: "Charlie Brown",
    email: "charlie@example.com",
    address: "0x9876543210abcdef9876543210abcdef98765432",
    createdAt: "2023-03-15T12:00:00Z",
  },
];

//
export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  // Extract query data from the query strings
  const id = searchParams.get("id");
  const address = searchParams.get("address");
  const username = searchParams.get("username");
  // verify for empty query strings

  if (!id && !address && !username) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Please provide at least one query parameter: id, username, or address.",
      },
      { status: 400 }
    );
  }
  try {
    const user = users.find(
      (user) =>
        user.id == Number(id) ||
        user.username == username ||
        user.address == address
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exit",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occured",
      },
      {
        status: 500,
      }
    );
  }
}
