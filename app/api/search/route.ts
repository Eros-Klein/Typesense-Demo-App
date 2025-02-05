import { searchData, searchDataEasy } from "@/utils/TypesenseInstance";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  const query1 = searchParams.get("c")

  if (!query) {
    return NextResponse.json(await searchDataEasy(query1!, ""))
  }

  return NextResponse.json(await searchDataEasy(query1!, query));
}
