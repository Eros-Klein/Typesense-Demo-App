"use server"

import { SearchParams } from "typesense/lib/Typesense/Documents";
import { Book } from "@/types/book";
import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";
import { readFile } from 'fs/promises'
import { createCollection, importData, searchData } from "./TypesenseInstance";

export async function initIfEmpty() {
  const searchParams: SearchParams = {
    q: "harry",
    query_by: 'title',
    sort_by: 'publication_year:desc',
    limit: 250
  }

  const request = (await searchData('books', searchParams)).hits!;
  const books = request.map((res) => res.document as Book);

  if (books.length === 0) {
    await init();
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

  createCollection(bookSchema)
  importData(books)
}

