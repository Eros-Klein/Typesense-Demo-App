import { Entity } from "@/types/entity";
import { Select, SelectItem } from "@heroui/select";
import { ChangeEvent, useEffect, useState } from "react";

export default function EntityDropdown({ callback }: { callback: (selectedEntity: Entity) => void }) {
  const [entitys, setEntitys] = useState<Entity[]>([])

  useEffect(() => {
    const initEntitys = async () => {
      const entitys = await fetch("/api/entitys");

      setEntitys(await entitys.json())
    }

    initEntitys()
  }, [])

  function change(e: ChangeEvent<HTMLSelectElement>) {

  }

  return (
    <Select className="max-w-xs" items={entitys} label="Your Entity" placeholder="Select an Entity">
      {(entity) => <SelectItem key={entity.name}>{entity.name}</SelectItem>}
    </Select>
  )
}
