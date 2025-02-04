import { Input } from "@heroui/input";
import { useEffect, useState } from "react";

export default function SchemaContent({ callback }: { callback: (name: string) => void }) {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    callback(name)
  }, [name])

  return (
    <Input label="Name of your collection" onChange={e => setName(e.target.value)} />
  )
}
