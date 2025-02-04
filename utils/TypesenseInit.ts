"use server"

import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";
import { readFile } from 'fs/promises'
import { createCollection, getTypesenseClient, importData } from "./TypesenseInstance";

export async function initIfEmpty() {

  const res = await (await getTypesenseClient()).collections().retrieve();

  const bookCollection = res.find((v) => v.name === "books")

  if (!bookCollection) {
    await init()
  }
}

async function init() {
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

  console.log("reseting DB")

  createCollection(bookSchema)
  importData(books)
}

