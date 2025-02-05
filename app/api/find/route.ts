import { searchDataEasy } from "@/utils/TypesenseInstance"
import { NextResponse } from "next/server"

type FindMatchingValuesRequest = {
  collection: string,
  findBy: string,
  searchValue: string
}

export async function POST(request: Request) {
  const body: FindMatchingValuesRequest = await request.json()

  return NextResponse.json(await searchDataEasy(body.collection, body.searchValue, body.findBy))
}
