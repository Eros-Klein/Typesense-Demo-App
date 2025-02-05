import { Select, SelectItem } from "@heroui/select"

export default function TypeDropdown({ callback, className }: { callback: (type: string) => void, className?: string }) {
  const possiblitys: string[] = ["string", "object", "int32", "int64", "float", "bool", "geopoint", "geopoint[]", "string[]", "int32[]", "int64[]", "float[]", "bool[]", "object[]", "auto", "string", "image"]

  return (
    <Select onChange={e => callback(possiblitys[parseInt(e.target.value)])} className={className} label="Datatype" placeholder="Select Datatype...">
      {possiblitys.map((v, idx) => (
        <SelectItem key={idx}>{v}</SelectItem>
      ))}
    </Select>
  )
}
