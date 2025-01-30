import Typesense from 'typesense'
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'
import { readFile } from 'fs/promises'
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

const bookSchema: CollectionCreateSchema = {
  name: "books",
  fields: [
    { 'name': 'title', 'type': 'string' },
    { 'name': 'authors', 'type': 'string[]', 'facet': true },

    { 'name': 'publication_year', 'type': 'int32', 'facet': true },
    { 'name': 'ratings_count', 'type': 'int32' },
    { 'name': 'average_rating', 'type': 'float' }
  ],
  default_sorting_field: 'ratings_count'
}

const books = await readFile(process.cwd() + '/data/books.jsonl', 'utf8')

createCollection(bookSchema)
importData(books)

function getTypesenseClient() {
  return client
}

async function createCollection(type: CollectionCreateSchema) {
  await client.collections().create(type)
}
async function importData(data: string) {
  await client.collections('books').documents().import(data)
}
async function searchData(collection: string, query: SearchParams) {
  return await client.collections(collection).documents().search(query)
}

export default { getTypesenseClient, createCollection, importData, searchData }
