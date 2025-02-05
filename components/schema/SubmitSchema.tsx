import { Button } from "@heroui/button";
import { useState } from "react";

export default function SubmitSchema({ name, attributes }: { name: string, attributes: string }) {
  const [status, setStatus] = useState<"default" | "primary" | "secondary" | "success" | "danger">("default")

  const submit = async () => {
    const json = `{"name": "${name}","fields": ${attributes}}`;

    const body = {
      jsonString: json.toString()
    }

    const res = await fetch("/api/collections", {
      method: "POST",
      body: JSON.stringify(body)
    })

    if (res.status === 200) {
      setStatus("success")
    }
    else setStatus("danger")
  }

  return (
    <Button color={status} onPress={submit} className="w-1/3 font-bold text-xl text-primary">Submit</Button>
  )
}
