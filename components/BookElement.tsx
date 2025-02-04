import { Book } from "@/types/book";

export default function BookElement({ book }: { book: Book }) {
  return (
    <div key={book.title + book.authors.join(",") + book.publication_year} className="border border-secondary rounded-md min-w-[30%] max-w-[30%] p-3 flex-1 transition-colors duration-200 ease-in-out hover:bg-secondary">
      <h2><a className="font-bold">{book.title}</a> ({book.publication_year})</h2>
      <p>{book.authors.join(", ")}</p>
      <p>Rating: {book.average_rating}</p>
    </div>
  )
}
