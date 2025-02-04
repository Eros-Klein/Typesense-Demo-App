import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex justify-evenly items-center flex-col h-svh w-svw px-[10%] py-[10%]">
      <h1 className="text-primary font-extrabold tracking-wider text-3xl">Navigator</h1>
      <div className="flex flex-row justify-evenly w-2/3 items-center">
        <Link className="p-3 bg-secondary hover:bg-accent rounded-md" href="/search">Search-Demo</Link>
      </div>
    </div>
  )
}
