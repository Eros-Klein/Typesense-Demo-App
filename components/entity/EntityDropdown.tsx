import { Entity } from "@/types/entity";
import { Select, SelectItem } from "@heroui/select";
import { SharedSelection } from "@heroui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { Key } from "readline";

export default function EntityDropdown({ callback }: { callback: (selectedEntity?: Entity) => void }) {
  const [entitys, setEntitys] = useState<Entity[]>([])

  useEffect(() => {
    const initEntitys = async () => {
      const entitys = await fetch("/api/entitys");

      setEntitys(await entitys.json())
    }

    initEntitys()
  }, [])

  async function change(val: SharedSelection) {
    if (val.currentKey) {
      const req = await fetch("/api/entitys?name=" + val.currentKey)
      const entity: Entity = await req.json();

      callback(entity)
    }
    else callback(undefined);
  }

  return (
    <Select onSelectionChange={change} className="max-w-xs" items={entitys} label="Your Entity" placeholder="Select an Entity">
      {(entity) => <SelectItem key={entity.name}>{entity.name}</SelectItem>}
    </Select>
  )
}
