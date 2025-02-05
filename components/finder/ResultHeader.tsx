import { Chip } from "@heroui/chip";
import { useEffect, useState } from "react";
import { SearchResponse } from "typesense/lib/Typesense/Documents";
import CheckIcon from "../icons/CheckIcon";

export default function ResultHeader({ searchResults }: { searchResults: SearchResponse<Object> }) {
  const [isFound, setIsFound] = useState<boolean>(false)

  useEffect(() => {
    setIsFound(searchResults.found > 0)
  }, [searchResults])

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex justify-start items-center flex-1">
        <Chip startContent={isFound ? <CheckIcon size={18} /> : ""} color={isFound ? "success" : "warning"} className="font-bold" variant="bordered">{isFound ? "Found" : "Not Found"}</Chip>
      </div>
      <div className="flex justify-center items-center flex-1">
        <Chip variant="light"><p className="italic">Took {searchResults.search_time_ms}ms</p></Chip>
      </div>
      <div className="flex justify-end items-center flex-1">
        <Chip color={isFound ? "default" : "warning"}>{searchResults.found}/{searchResults.out_of}</Chip>
      </div>
    </div>
  )
}
