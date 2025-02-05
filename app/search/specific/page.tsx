"use server"

import FindForm from "@/components/finder/FindForm"
import { initIfEmpty } from "@/utils/TypesenseInit"

export default async function SpecificSearch() {
  await initIfEmpty()

  return (
    <div className="flex justify-evenly items-center flex-col h-svh w-svw px-[10%] py-[10%]">
      <h1 className="text-primary font-extrabold tracking-wider text-3xl">Find-Demo</h1>
      <FindForm />
    </div>
  )
}
