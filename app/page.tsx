import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex justify-evenly items-center flex-col h-svh w-svw px-[10%] py-[10%]">
      <h1 className="text-primary font-extrabold tracking-wider text-center text-3xl">Navigator</h1>
      <div className="flex flex-row justify-evenly w-2/3 gap-5 items-center">
        <Link className="p-3 bg-secondary hover:bg-accent text-center flex-1 rounded-md" href="/search">Search-Demo</Link>
        <Link className="p-3 bg-secondary hover:bg-accent text-center flex-1 rounded-md" href="/create/entity">Entity-Creation-Demo</Link>
        <Link className="p-3 bg-secondary hover:bg-accent text-center flex-1 rounded-md" href="/create/type">Schema-Creation-Demo</Link>
      </div>
    </div>
  )
}
