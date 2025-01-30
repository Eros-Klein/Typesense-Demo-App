import TypesenseSearch from "@/components/TypesenseSearch";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center flex-col h-svh w-svw px-[10%] py-[10%]">
      <h1 className="text-primary font-extrabold tracking-wider text-3xl">Home</h1>
      <TypesenseSearch />
    </div>
  )
}
