"use client"

import { useState } from "react";
import AttributeList from "./AttributeList";
import SchemaContent from "./SchemaContent";
import SubmitSchema from "./SubmitSchema";
import SchemaPreview from "./SchemaPreview";

export default function SchemaForm() {
  const [attributes, setAttributes] = useState<string>("")
  const [name, setName] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-2/3">
      <div className="w-full flex flex-row gap-2">
        <div className="w-2/3 gap-2 flex flex-col">
          <SchemaContent callback={setName} />
          <AttributeList callback={setAttributes} />
        </div>

        <div className="w-1/3">
          <SchemaPreview name={name} attributes={attributes} />
        </div>
      </div>

      <SubmitSchema name={name} attributes={attributes} />
    </div>
  )
}
