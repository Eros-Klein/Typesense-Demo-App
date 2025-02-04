"use server"

import Typesense from 'typesense'
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'
import { SearchParams } from 'typesense/lib/Typesense/Documents'

const client = new Typesense.Client({
  nodes: [{
    host: 'localhost',
    port: 8108,
    protocol: 'http'
  }],
  apiKey: process.env.API_KEY!,
  connectionTimeoutSeconds: 2
})

export async function getTypesenseClient() {
  return client
}

export async function createCollection(type: CollectionCreateSchema) {
  await client.collections().create(type)
}
export async function importData(data: string) {
  await client.collections('books').documents().import(data)
}
export async function searchData(collection: string, query: SearchParams) {
  return await client.collections(collection).documents().search(query)
}
