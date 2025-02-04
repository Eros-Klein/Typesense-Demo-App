"use client"

import { Book } from "@/types/book"
import TypesenseSearchResult from "./TypesenseSearchResult"
import SearchBar from "./SearchBar"
import { useState } from "react"

export default function TypesenseSearch() {
  const [books, setBooks] = useState<Book[]>([])

  return (
    <div className="flex flex-col  justify-center items-center gap-y-3 border-accent border py-10 overflow-y-auto max-h-[100%]">
      <SearchBar action={setBooks} />
      <TypesenseSearchResult books={books} />
    </div>
  )
}
