import { useEffect, useState } from "react"
import { SearchResponse } from "typesense/lib/Typesense/Documents"
import ResultContent from "./ResultContent"

export default function ResultContents({ searchResults, headerVal, collection }: { searchResults: SearchResponse<Object>, headerVal: string, collection: string }) {
  const [isFound, setIsFound] = useState<boolean>(false)

  useEffect(() => {
    setIsFound(searchResults.found > 0)
  }, [searchResults])

  return (
    <div className="flex flex-col justify-start items-center w-full h-[50svh] gap-2 overflow-y-auto">
      {isFound ? searchResults.hits!.map((v, idx) => <ResultContent collection={collection} headerVal={headerVal} key={idx} hit={v} />) : (
        <div className="flex flex-col justify-center items-center p-5 h-full">
          <p className="font-bold text-center">No Results were found!</p>
        </div>
      )}
    </div>
  )
}
