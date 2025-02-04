import { getEntitys } from "@/utils/EntityManager";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const val = await getEntitys();

  const { searchParams } = new URL(req.url)
  const query = searchParams.get("name")

  if (query) {
    return NextResponse.json(val.find(v => v.name === query))
  }

  return NextResponse.json(val)
}
