"use client"

import { Book } from "@/types/book"
import TypesenseSearchResult from "./TypesenseSearchResult"
import SearchBar from "./SearchBar"
import { useState } from "react"

export default async function TypesenseSearch() {
  const [books, setBooks] = useState<Book[]>([])



  return (
    <div className="flex justify-evenly flex-wrap gap-y-3 items-stretch border-accent border py-10 overflow-y-auto max-h-[100%]">
      <SearchBar action={setBooks} />
      <TypesenseSearchResult books={books} />
    </div>
  )
}
