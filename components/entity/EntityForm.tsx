"use client"

import { useState } from "react";
import EntityDropdown from "./EntityDropdown";
import { Entity } from "@/types/entity";
import EntityContent from "./EntityContent";
import EntitySubmit from "./EntitySubmit";
import EntityPreview from "./EntityPreview";

export default function EntityForm() {
  const [entity, setEntity] = useState<Entity | undefined>(undefined)
  const [json, setJson] = useState<string>("")

  return (
    <div className="w-svw flex flex-col justify-center items-center gap-2">
      <EntityDropdown callback={setEntity} />
      <div className="flex w-2/3 gap-2 flex-row justify-center items-center">
        <EntityContent callback={setJson} entity={entity} />
        {entity ? <EntityPreview jsonString={json} /> : ''}
      </div>
      <EntitySubmit entity={json} schema={entity?.name ? entity.name : ""} />
    </div>
  )
}
