"use client"

import { Book } from "@/types/book";

export default function SearchBar({ action }: { action: (boos: Book[]) => void }) {
  async function updateSearchVal(val: React.ChangeEvent<HTMLInputElement>) {
    const queryString = val.target.value === "" ? "" : `?q=${val.target.value}`;

    const res = await fetch(`/api/search${queryString}`)

    const books: Book[] = await res.json()

    action(books)
  }

  return (
    <input className="p-2 w-1/2 outline-none rounded-2xl bg-secondary hover:bg-accent" onChange={updateSearchVal} />
  )
}

