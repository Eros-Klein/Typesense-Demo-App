import { getEntitys } from "@/utils/EntityManager";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const val = await getEntitys();

  console.log(val)

  return NextResponse.json(val)
}
