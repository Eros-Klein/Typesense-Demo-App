import TypesenseSearch from "@/components/TypesenseSearch";
import { initIfEmpty } from "@/utils/TypesenseInit";

export default async function Home() {
  await initIfEmpty();

  return (
    <div className="flex justify-evenly items-center flex-col h-svh w-svw px-[10%] py-[10%]">
      <h1 className="text-primary font-extrabold tracking-wider text-3xl">Search-Demo</h1>
      <TypesenseSearch />
    </div>
  )
}
