
import { connectDB } from "@/lib/mongodb";
import users from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const { name, email, password } = await req.json();

        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return NextResponse.json("User Already Exists", { status: 400 });
        }

        const encpassword = await bcrypt.hash(password, 10);

        const newUser = await users.create({
            name,
            email,
            password: encpassword
        });

        return NextResponse.json(
            { message: "Registration Successful" },
            { status: 201 }
        );

    } catch (err) {
        console.error("Registration API Error:", err);

        return NextResponse.json(
            "Something Went Wrong!!",
            { status: 500 }
        );
    }
}
