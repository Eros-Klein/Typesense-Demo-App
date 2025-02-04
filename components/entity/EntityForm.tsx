"use client"

import { useState } from "react";
import EntityDropdown from "./EntityDropdown";
import { Entity } from "@/types/entity";

export default function EntityForm() {
  const [entity, setEntity] = useState<Entity | undefined>(undefined)

  return (
    <EntityDropdown callback={setEntity} />
  )
}
