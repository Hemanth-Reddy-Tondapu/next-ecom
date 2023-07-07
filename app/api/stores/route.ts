import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { storeName } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!storeName) {
      return new NextResponse("Name is required", { status: 400 });
    }
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    const storeId = randomNumber;
    const store = await prismadb.store.create({
      data: {
        storeName: storeName,
        userId,
        storeId,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}