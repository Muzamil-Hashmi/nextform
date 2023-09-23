import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const formData = await req.formData();
    const fields = {};
    const savedFiles = {};

    for (const [key, value] of formData.entries()) {
      console.log(value);

      if (value && typeof value.arrayBuffer === "function") {
        // Handle Blob-like object
        const buffer = Buffer.from(await value.arrayBuffer());

        const newFilename = `${Date.now()}-${value.name}`;
        const newPath = path.join(process.cwd(), "uploads", newFilename);

        fs.writeFileSync(newPath, buffer); // Saving the buffer to a file
        savedFiles[key] = newPath;
      } else {
        fields[key] = value;
      }
    }

    // Assuming you have a model named "user" in your Prisma schema
    const newUser = await prisma.user.create({
      data: {
        ...fields,
        passportCopyHead: savedFiles.passportCopyHead,
        visa: savedFiles.visa,
        passportCopyDep1: savedFiles.passportCopyDep1,
        visaDep1: savedFiles.visaDep1,
        passportCopyDep2: savedFiles.passportCopyDep2,
        visaDep2: savedFiles.visaDep2,
        proofOfOrigin: savedFiles.proofOfOrigin,
      },
    });

    return NextResponse.json({
      message: "User registered successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error in POST function:", error);
    return NextResponse.json({ error: error.message });
  }
};
