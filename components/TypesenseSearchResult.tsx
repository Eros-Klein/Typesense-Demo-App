"use server"

import { Book } from "@/types/book";
import BookElement from "./BookElement";

export default async function TypesenseSearchResult({ books }: { books: Book[] }) {
  return (
    <div className="flex justify-evenly flex-wrap gap-y-3 items-stretch border-accent border py-10 overflow-y-auto max-h-[100%]">
      {books.map((book) => (BookElement({ book: book })))}
    </div >
  )
}
