import { Entity } from "@/types/entity"
import { Input } from "@heroui/input"
import { Select, SelectItem } from "@heroui/select"
import { useEffect, useState } from "react"
import { FieldType } from "typesense/lib/Typesense/Collection"

export default function FindContent({ collection, callback }: { collection: Entity, callback: (searchVal: string | number | boolean | undefined, attribute: { name: string, type: FieldType } | undefined) => void }) {
  const [key, setKey] = useState<{ name: string, type: FieldType } | undefined>(undefined)
  const [searchVal, setSearchVal] = useState<string | number | boolean | undefined>(undefined)

  useEffect(() => {
    callback(searchVal, key)
  }, [searchVal, key])

  return (
    <div className="flex flex-row w-2/3 gap-2">
      <Select className="w-1/3" label="Find by" placeholder="Your selected attribute..." items={collection.attributes} onChange={(e) => setKey(collection.attributes.find(v => v.name === e.target.value))}>
        {(att) => <SelectItem key={att.name}>{att.name}</SelectItem>}
      </Select>
      <Input label="Search Value" placeholder="Search..." onChange={e => setSearchVal(e.target.value)} isDisabled={key === undefined} className="w-2/3" type={key?.type === "string" ? "string" : key?.type === "string[]" ? "string" : "number"} />
    </div>
  )
}
