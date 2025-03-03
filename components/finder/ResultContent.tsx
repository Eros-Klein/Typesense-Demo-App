import { Card, CardBody, CardHeader } from "@heroui/card";
import { SearchResponseHit } from "typesense/lib/Typesense/Documents";
import ResultMatch from "./ResultMatch";
import { Chip } from "@heroui/chip";
import TrashIcon from "../icons/TrashIcon";

export default function ResultContent({ hit, headerVal, collection }: { hit: SearchResponseHit<Object>, headerVal: string, collection: string }) {

  console.log(collection)

  const deleteDocument = async () => {
    console.log(hit.document)
    console.log(collection)

    await fetch("/api/entitys", {
      method: "DELETE",
      body: JSON.stringify({
        collection: collection,
        id: (hit.document as any)["id"] as string
      })
    })
  }

  return (
    <Card className="w-2/3 min-h-32">
      <Chip className="absolute right-5 top-5 cursor-pointer p-4 flex justify-center items-center aspect-square hover:bg-red-900/50 transition-all duration-300 z-20" variant="bordered" color="danger" size="sm" onClick={() => {
        deleteDocument()
      }}><TrashIcon className="cursor-pointer" size={18} /></Chip>
      <CardHeader>
        <p>{hit.document[headerVal as keyof typeof hit.document].toString()}</p>
      </CardHeader>
      <CardBody>
        {hit.highlights?.map(v => <ResultMatch key={v.field} match={v} />)}
      </CardBody>
    </Card>
  )
}
