import { Book } from "@/types/book";
import TypesenseInstance from "@/utils/TypesenseInstance";
import { SearchParams } from "typesense/lib/Typesense/Documents";

export default async function TypesenseSearch() {
  const searchParams: SearchParams = {
    q: 'Harry Potter',
    query_by: 'title',
    sort_by: 'publication_year:desc'
  }

  const books = (await TypesenseInstance.searchData('books', searchParams)).hits!;
  console.log(books)

  return (
    <div>
      <p>Hello World</p>
    </div >
  )
}
