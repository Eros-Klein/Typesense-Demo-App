import { Book } from "@/types/book";
import TypesenseInstance from "@/utils/TypesenseInstance";
import { SearchParams } from "typesense/lib/Typesense/Documents";
import BookElement from "./BookElement";

export default async function TypesenseSearch() {
  const searchParams: SearchParams = {
    q: 'Harry Potter',
    query_by: 'title',
    sort_by: 'publication_year:desc'
  }

  const request = (await TypesenseInstance.searchData('books', searchParams)).hits!;
  const books = request.map((res) => res.document as Book);

  return (
    <div className="flex justify-evenly flex-wrap gap-y-3 items-stretch border-accent border py-10 overflow-y-auto max-h-[100%]">
      {books.map((book) => (BookElement({ book: book })))}
    </div >
  )
}
