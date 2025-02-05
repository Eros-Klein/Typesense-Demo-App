"use client"

import { Book } from "@/types/book";
import EntityDropdown from "./entity/EntityDropdown";
import { useEffect, useState } from "react";
import { Entity } from "@/types/entity";

export default function SearchBar({ action }: { action: (boos: Book[]) => void }) {
  const [selectedElement, setSelectedElement] = useState<Entity | undefined>(undefined)
  const [searchText, setSearchText] = useState<string>("")

  async function updateSearchVal() {
    const queryString = searchText === "" ? `?c=${selectedElement ? selectedElement : "books"}` : `?c=${selectedElement ? selectedElement : "books"}&q=${searchText}`;

    const res = await fetch(`/api/search${queryString}`)

    const books: Book[] = await res.json()

    action(books)
  }

  useEffect(() => {
    updateSearchVal()
  }, [selectedElement, searchText])

  return (
    <div className="flex flex-row w-full gap-2 justify-center items-center">
      <input className="p-2 w-1/2 outline-none rounded-2xl bg-secondary hover:bg-accent" onChange={(e) => setSearchText(e.target.value)} />
      <EntityDropdown callback={setSelectedElement} />
    </div>
  )
}

