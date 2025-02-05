import { createCollection } from "@/utils/TypesenseInstance";
import { NextResponse } from "next/server";
import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

type CreationRequest = {
  jsonString: CollectionCreateSchema
}

export async function POST(req: Request) {
  const val: CreationRequest = await req.json();

  createCollection(val.jsonString)

  return NextResponse.json("");
}
