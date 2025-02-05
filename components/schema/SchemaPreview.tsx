import { Skeleton } from "@heroui/skeleton";
import { useEffect, useState } from "react";

export default function SchemaPreview({ name, attributes }: { name: string, attributes: string }) {
  const [jsonValue, setJsonValue] = useState<string>("")

  useEffect(() => {
    const update = () => {
      const json = `{"name": "${name}","fields": ${attributes}}`;

      try {
        setJsonValue(JSON.stringify(JSON.parse(json), null, 2))
      } catch {
        setJsonValue("");
      }
    }

    update()
  }, [name, attributes])

  return (
    <Skeleton isLoaded={jsonValue !== ""} className="h-full w-full justify-center items-centers flex rounded-lg">
      <pre className="p-4 bg-gray-900 text-primary w-full h-full rounded-md">
        <code className="w-full">{jsonValue}</code>
      </pre>
    </Skeleton>
  )
}
