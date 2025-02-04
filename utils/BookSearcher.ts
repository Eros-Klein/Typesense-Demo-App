"use server"

import { SearchParams } from "typesense/lib/Typesense/Documents";
import { searchData } from "./TypesenseInstance";
import { Book } from "@/types/book";

export async function getBooks(searchTerm: string) {
  const searchParams: SearchParams = {
    q: searchTerm,
    query_by: 'title',
    sort_by: 'publication_year:desc',
    limit: 250
  }

  const request = (await searchData('books', searchParams)).hits!;
  return request.map((res) => res.document as Book);
}
