import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import sgMail from "@sendgrid/mail";

const prisma = new PrismaClient();

// Dummy admin email
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const SEND_GRID_API_KEY = process.env.SEND_GRID_API_KEY;
sgMail.setApiKey(SEND_GRID_API_KEY);

export const POST = async (req, res) => {
  try {
    const formData = await req.formData();
    const fields = {};
    const savedFiles = {};

    for (const [key, value] of formData.entries()) {
      if (value && typeof value.arrayBuffer === "function") {
        // Handle Blob-like object
        const buffer = Buffer.from(await value.arrayBuffer());

        const newFilename = `${Date.now()}-${value.name}`;
        const newPath = path.join(process.cwd(), "uploads", newFilename);

        fs.writeFileSync(newPath, buffer);
        savedFiles[key] = newPath;
      } else {
        fields[key] = value;
      }
    }

    const userRole = fields.email === ADMIN_EMAIL ? "ADMIN" : "USER";

    const newUser = await prisma.user.create({
      data: {
        ...fields,
        role: userRole,
        passportCopyHead: savedFiles.passportCopyHead,
        visa: savedFiles.visa,
        passportCopyDep1: savedFiles.passportCopyDep1,
        visaDep1: savedFiles.visaDep1,
        passportCopyDep2: savedFiles.passportCopyDep2,
        visaDep2: savedFiles.visaDep2,
        proofOfOrigin: savedFiles.proofOfOrigin,
        userStatus: "pending",
      },
    });
    const msg = {
      to: ADMIN_EMAIL,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: "New User Registration",
      text: `A new user with the email ${fields.email} has registered.`,
      html: `<strong>A new user with the email ${fields.email} has registered.</strong>`,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      {
        message: `User registered successfully as ${userRole}.`,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST function:", error);
    return NextResponse.json({ error: error.message });
  }
};
