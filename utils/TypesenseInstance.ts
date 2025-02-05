"use server"

import exp from 'node:constants'
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
export async function importData(data: string, schema?: string) {
  await client.collections(schema ? schema : "books").documents().import(data)
}
export async function createDocument(data: any, schema: string) {
  await client.collections(schema).documents().create(data)
}
export async function searchData(collection: string, query: SearchParams) {
  return await client.collections(collection).documents().search(query)
}
export async function searchDataEasy(collection: string, query: string, queryField: string) {
  const searchParams: SearchParams = {
    q: query,
    query_by: queryField,
    limit: 250
  }

}
