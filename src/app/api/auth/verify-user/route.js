import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const { email, user } = body;

    if (user !== "ADMIN") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { userStatus: "approved" },
    });

    NextResponse.json(
      { message: "User status updated", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: error.message }, { status: 500 });
  }
};
