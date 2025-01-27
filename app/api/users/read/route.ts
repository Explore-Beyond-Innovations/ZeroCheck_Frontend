import connectDB from '@/libs/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  try {
    await connectDB(); 


    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const address = searchParams.get("address");
    const username = searchParams.get("username");

    if (!id && !address && !username) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide at least one query parameter: id, username, or address.",
        },
        { status: 400 }
      );
    }

 
    const query: any = {};
    if (id) query.userId = id;  
    if (address) query.address = { $regex: new RegExp(address, 'i') }; 
    if (username) query.username = { $regex: new RegExp(username, 'i') }; 


    const user = await User.findOne(query);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

   
    return NextResponse.json(
      {
        success: true,
        message: user,
      },
      { status: 200 }
    );
  } catch (error: any) {
   
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred.",
      },
      { status: 500 }
    );
  }
}
