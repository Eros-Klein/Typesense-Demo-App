import { getBooks } from "@/utils/BookSearcher";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.redirect("/api/search?q=Harry Potter", { status: 302 });
  }

  return NextResponse.json(await getBooks(query));
}
