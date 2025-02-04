import { getBooks } from "@/utils/BookSearcher";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(await getBooks(""))
  }

  return NextResponse.json(await getBooks(query));
}
