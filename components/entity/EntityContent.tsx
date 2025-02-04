import { Entity } from "@/types/entity";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { ChangeEvent, useState } from "react";

export default function EntityContent({ entity, callback }: { entity?: Entity, callback: (json: string) => void }) {
  const [entityValues, setEntityValues] = useState<{ key: string, val: any, type: "string" | "string[]" | "number" }[]>([]);

  if (!entity) {
    return (
      <div className="p-5">
        <p>No Entity-Scheme selected :-(</p>
      </div>
    )
  }

  const buildJson = (param: { key: string, val: any, type: "string" | "string[]" | "number" }[]) => {
    let jsonString = "{"

    const jsonStrings: string[] = []

    param.forEach(element => {
      if (element.type === "number") {
        jsonStrings.push(` "${element.key}": ${element.val}`)
      }
      else if (element.type === "string") {
        jsonStrings.push(` "${element.key}": "${element.val}"`)
      }
      else {
        const substring = (element.val as string).split(";").map(v => `"${v}"`).join(", ")

        jsonStrings.push(` "${element.key}": [${substring}]`)
      }
    });

    jsonString += jsonStrings.join(",")
    jsonString += " }"

    return jsonString;
  }

  const switchVal = async (key: string, val: any, type: "string" | "string[]" | "number") => {
    const oldVals = entityValues;

    if (oldVals.find(v => v.key === key)) {
      oldVals.find(v => v.key === key)!.val = val;
    }
    else {
      oldVals.push({ key, val, type })
    }

    setEntityValues(oldVals)

    callback(buildJson(entityValues))
  }

  return (
    <div className="flex w-full flex-col gap-2 p-2">
      {entity.attributes.map(v => {
        if (v.type === "string[]") {
          return (
            <div key={v.name} className="flex flex-row justify-between gap-1 items-center">
              <Input onChange={(e) => switchVal(v.name, e.target.value, "string[]")} type="string" label={v.name} />
              <Tooltip color="secondary" content="Seperate strings by using ;"><Button color="secondary" className="font-bold text-opacity-50">important</Button></Tooltip>
            </div>
          )
        }
        return <Input onChange={(e) => switchVal(v.name, e.target.value, v.type === "string" ? "string" : "number")} type={v.type === "string" ? "input" : "number"} key={v.name} label={v.name} />
      }
      )}
    </div>
  )
}
