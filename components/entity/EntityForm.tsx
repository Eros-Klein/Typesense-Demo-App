"use client"

import { useState } from "react";
import EntityDropdown from "./EntityDropdown";
import { Entity } from "@/types/entity";
import EntityContent from "./EntityContent";

export default function EntityForm() {
  const [entity, setEntity] = useState<Entity | undefined>(undefined)

  return (
    <div className="w-2/3 flex flex-col justify-center items-center">
      <EntityDropdown callback={setEntity} />
      <EntityContent entity={entity} />
    </div>
  )
}
