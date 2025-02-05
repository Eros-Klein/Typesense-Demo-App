"use client"

import { useState } from "react"
import EntityDropdown from "../entity/EntityDropdown"
import { Entity } from "@/types/entity"
import FindContent from "./FindContent"

export default function FindForm() {
  const [entity, setEntity] = useState<Entity | undefined>(undefined)

  return (
    <div className="w-svw flex flex-col justify-center items-center gap-2">
      <EntityDropdown callback={setEntity} />
      {entity ? <FindContent collection={entity} /> : ""}
    </div>
  )
}
