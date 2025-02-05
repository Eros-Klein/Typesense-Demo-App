import { Card, CardBody, CardHeader } from "@heroui/card";
import { SearchResponseHit } from "typesense/lib/Typesense/Documents";
import ResultMatch from "./ResultMatch";

export default function ResultContent({ hit, headerVal }: { hit: SearchResponseHit<Object>, headerVal: string }) {
  return (
    <Card className="w-2/3 min-h-32">
      <CardHeader>
        <p>{hit.document[headerVal as keyof typeof hit.document].toString()}</p>
      </CardHeader>
      <CardBody>
        {hit.highlights?.map(v => <ResultMatch key={v.field} match={v} />)}
      </CardBody>
    </Card>
  )
}
