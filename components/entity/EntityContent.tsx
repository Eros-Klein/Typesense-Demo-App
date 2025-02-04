import { Entity } from "@/types/entity";
import { Input } from "@heroui/input";
import { useState } from "react";

export default function EntityContent({ entity }: { entity?: Entity }) {
  const [entityValues, setEntityValues] = useState<{ key: string, val: any }[]>([]);

  if (!entity) {
    return (
      <div className="p-5">
        <p>No Entity-Scheme selected :-(</p>
      </div>
    )
  }

  return (
    <div className="w-1/3 flex flex-col gap-2 p-2">
      {entity.attributes.map(v => <Input type={v.type === "string" ? "input" : "number"} key={v.name} label={v.name} />)}
    </div>
  )
}
