import { Input } from "@heroui/input";
import TypeDropdown from "./TypeDropdown";
import { useEffect, useState } from "react";

export default function Attribute({ callback }: { callback: (name: string, dataType: string) => void }) {
  const [dataType, setDataType] = useState<string | undefined>(undefined)
  const [name, setName] = useState<string>("")

  useEffect(() => {
    if (name !== "" && dataType !== undefined) {
      callback(name, dataType)
      console.log(dataType)
    }
  }, [dataType, name])

  return (
    <div className="flex flex-row gap-2 w-full items-center">
      <Input onChange={e => setName(e.target.value)} label="Name of your Attribute" className="w-2/3" />
      <TypeDropdown className="w-1/3" callback={setDataType} />
    </div>
  )
}
