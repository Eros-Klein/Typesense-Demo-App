import { SearchResponse } from "typesense/lib/Typesense/Documents";

export default function ResultHeader({ searchResults }: { searchResults: SearchResponse<Object> }) {
  return (
    <div className="flex flex-row justify-evenly">
      <p></p>
    </div>
  )
}
