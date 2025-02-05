"use client"

import { useState } from "react"
import EntityDropdown from "../entity/EntityDropdown"
import { Entity } from "@/types/entity"
import FindContent from "./FindContent"
import SubmitSearch from "./SubmitSearch"
import { FieldType } from "typesense/lib/Typesense/Collection"

export default function FindForm() {
  const [entity, setEntity] = useState<Entity | undefined>(undefined)
  const [attribute, setAttribute] = useState<{ name: string, type: FieldType } | undefined>(undefined)
  const [searchVal, setSearchVal] = useState<number | string | undefined | boolean>(undefined)

  return (
    <div className="w-svw flex flex-col justify-center items-center gap-2">
      <EntityDropdown callback={setEntity} />
      {entity ? <FindContent callback={(val, att) => {
        setSearchVal(val);
        setAttribute(att);
      }} collection={entity} /> : ""}
      <SubmitSearch collection={entity} attribute={attribute} value={searchVal} />
    </div>
  )
}
