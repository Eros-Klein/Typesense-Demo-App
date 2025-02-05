import { useState } from "react";
import Attribute from "./Attribute";
import { Button } from "@heroui/button";

type Attribute = {
  key: number,
  name: string,
  dataType: string
}

export default function AttributeList({ callback }: { callback: (jsonString: string) => void }) {
  const [counter, setCounter] = useState<number>(1)
  const [attributes, setAttributes] = useState<Attribute[]>([])

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter >= 2) {
      setCounter(counter - 1)
    }
  }

  const upsertAttribute = (key: number, name: string, dataType: string) => {
    const oldAttributes = attributes;

    if (oldAttributes.find(v => v.key === key)) {
      const attribute = oldAttributes.find(v => v.key === key)!
      attribute.dataType = dataType
      attribute.name = name
    }
    else {
      oldAttributes.push({ key: key, name: name, dataType: dataType })
    }

    setAttributes(oldAttributes)

    callback(toJsonString())
  }

  const toJsonString = () => {
    let jsonString = "["

    const arr: string[] = []

    attributes.forEach(a => {
      const newString = `{ "name": "${a.name}", "type": "${a.dataType}" }`

      arr.push(newString)
    })

    jsonString += arr.join(", ")

    return jsonString + "]"
  }

  return (
    <div className="flex flex-col justify-evenly gap-2 items-center w-full">
      {Array.from({ length: counter }).map((_, idx) => (
        <Attribute callback={(n, d) => upsertAttribute(idx, n, d)} key={idx} />
      ))}
      <div className="flex p-3 flex-row w-full justify-evenly">
        <Button color="secondary" className="font-bold text-primary text-xl" onPress={incrementCounter}>Add</Button>
        <Button color="danger" isDisabled={counter === 1} className="font-bold text-primary text-xl" onPress={decrementCounter}>Remove</Button>
      </div>
    </div>
  )
}
