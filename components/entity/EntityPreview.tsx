import { Skeleton } from "@heroui/skeleton";

export default function EntityPreview({ jsonString }: { jsonString: string }) {
  const isValid = () => {
    try {
      JSON.parse(jsonString)
      return true
    } catch {
      return false
    }
  }

  return (
    <Skeleton isLoaded={isValid()} className="h-full w-1/3 max-w-[500px] justify-center items-centers flex rounded-lg">
      <pre className="p-4 bg-gray-900 text-primary max-w-[500px] w-full h-full rounded-md overflow-x-auto">
        <code className="w-full">{isValid() ? JSON.stringify(JSON.parse(jsonString), null, 2) : ""}</code>
      </pre>
    </Skeleton>
  )
}