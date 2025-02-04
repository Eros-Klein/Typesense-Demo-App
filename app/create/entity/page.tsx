"use server"

import EntityForm from "@/components/entity/EntityForm";
import { initIfEmpty } from "@/utils/TypesenseInit";

export default async function CreateEntity() {
  await initIfEmpty();

  return (
    <div className="flex justify-evenly items-center flex-col h-svh w-svw px-[10%] py-[10%]">
      <h1 className="text-primary font-extrabold tracking-wider text-3xl">Entity-Creation-Demo</h1>
      <EntityForm />
    </div>
  )
}
