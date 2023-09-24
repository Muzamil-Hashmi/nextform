import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  const body = await req.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: "Email and password are required." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    let permissions = [];
    if (user.role === "ADMIN") {
      permissions = [
        "canManageUsers",
        "canApproveRegistrations",
        "canApproveEdits",
        "canViewCategories",
      ];
    } else if (user.role === "USER") {
      permissions = ["canEditSelf", "canViewSelf"];
    }

    return NextResponse.json(
      {
        message: "Logged in successfully.",
        user: { email: user.email, fullName: user.fullname, role: user.role },
        permissions,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Internal server error." });
  }
};
