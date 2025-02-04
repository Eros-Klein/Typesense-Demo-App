import { Entity } from "@/types/entity";
import { useEffect, useState } from "react";

export default function EntityDropdown({ callback }: { callback: (selectedEntity: Entity) => void }) {
  const [entitys, setEntitys] = useState<Entity[]>([])

  useEffect(() => {
    const initEntitys = async () => {
      const entitys = await fetch("/api/entitys");

      setEntitys(await entitys.json())
    }

    initEntitys()
  }, [entitys])

  return (
    <select>
      {entitys.map(v => {
        return <option key={v.name}>{v.name}</option>
      })}
    </select>
  )
}
