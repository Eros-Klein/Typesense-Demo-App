"use client"

import { Book } from "@/types/book";
import BookElement from "./BookElement";

export default function TypesenseSearchResult({ books }: { books: Book[] }) {
  return (
    <div className="flex justify-evenly flex-wrap gap-y-3 items-stretch py-10 overflow-y-auto max-h-[100%]">
      {books.map((book) => (BookElement({ book: book })))}
    </div >
  )
}
