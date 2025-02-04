import { getEntitys } from "@/utils/EntityManager";
import { createDocument } from "@/utils/TypesenseInstance";
import { NextResponse } from "next/server";

type CreationRequest = {
  schema: string,
  data: any
}

export async function GET(req: Request) {
  const val = await getEntitys();

  const { searchParams } = new URL(req.url)
  const query = searchParams.get("name")

  if (query) {
    return NextResponse.json(val.find(v => v.name === query))
  }

  return NextResponse.json(val)
}

export async function POST(req: Request) {
  const body: CreationRequest = await req.json();

  console.log(body.data)

  await createDocument(body.data, body.schema)

  return NextResponse.json("")
}
