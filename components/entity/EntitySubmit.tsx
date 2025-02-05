import { Button } from "@heroui/button";
import { useState } from "react";

export default function EntitySubmit({ entity, schema }: { entity: string, schema: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<"primary" | "success" | "danger">("primary")

  const addEntity = async () => {
    setIsLoading(true);

    const body = {
      schema: schema,
      data: entity
    }

    const res = await fetch("/api/entitys", {
      method: "POST",
      body: JSON.stringify(body)
    })

    console.log(JSON.stringify(body))

    if (res.status === 200) {
      setStatus("success");
    }
    else setStatus("danger")

    setIsLoading(false)
  };
  return (
    <Button onPress={addEntity} isLoading={isLoading} color={status} className="font-bold text-gray-800 text-opacity-75">Submit</Button>
  )
}
