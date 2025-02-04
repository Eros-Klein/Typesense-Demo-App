"use client"

import { Book } from "@/types/book";

export default async function SearchBar({ action }: { action: (boos: Book[]) => void }) {


  function updateSearchVal(val: React.ChangeEvent<HTMLInputElement>) {
    fetch(`/api/search?q=${val.target.value}`).then((res) => res.json().then((data) => action(data as Book[])));
  }

  return (
    <input onChange={updateSearchVal} />
  )
}

