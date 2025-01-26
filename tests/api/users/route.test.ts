import { GET } from "../../../app/api/users/route";
import { NextRequest } from "next/server";

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((data, options) => ({
      status: options?.status || 200,
      json: () => Promise.resolve(data),
    })),
  },
}));

describe("Get User API", () => {
  it("should return an error if no query parameters is provided", async () => {
    // Mock Request object
    const mockRequest = {
      url: "http://localhost:3000/api/users"
    } as Request;

    // Call the GET handler
    const response = await GET(mockRequest);
    const body = await response.json();

    // Assertions
    expect(response.status).toBe(400);
    expect(body).toEqual({
      success: false,
      message:
        "Please provide at least one query parameter: id, username, or address.",
    });
   
  });

  it("Should return a user with Id 1", async () => {
    const mockRequest = {
      url: "http://localhost:3000/api/users?id=1",
    } as Request;

    const response = await GET(mockRequest);
    // console.log(response.json())
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body).toEqual({
      success: true,
      message: {
        id: 1,
        username: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        address: "0x1234567890abcdef1234567890abcdef12345678",
        createdAt: "2022-01-10T09:30:00Z",
      },
    });
  });

  it("should return  user does not exit", async () => {
    const mockRequest = {
      url: "http://localhost:3000/api/users?id=100",
    } as Request;

    const response = await GET(mockRequest);
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body).toEqual({
      success: false,
      message: "User does not exit",
    });
  });
});
