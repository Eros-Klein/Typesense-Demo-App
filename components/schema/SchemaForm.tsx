"use client"

import { useState } from "react";
import AttributeList from "./AttributeList";
import SchemaContent from "./SchemaContent";
import SubmitSchema from "./SubmitSchema";

export default function SchemaForm() {
  const [attributes, setAttributes] = useState<string>("")
  const [name, setName] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-2/3">
      <SchemaContent callback={setName} />
      <AttributeList callback={setAttributes} />
      <SubmitSchema name={name} attributes={attributes} />
    </div>
  )
}
