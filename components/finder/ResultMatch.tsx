import { Match } from "@/types/match";

export default function ResultMatch({ match }: { match: Match }) {
  const editedSnippet = match.snippet?.replaceAll("</mark>", "</a>").replaceAll("<mark>", "<a style=\"font-weight: 800; color: green; \">")

  const editedSnippets = match.snippets?.map(v => v.replaceAll("</mark>", "</a>").replaceAll("<mark>", "<a style=\"font-weight: 800; color: green; \">"))

  console.log(editedSnippets)
  console.log(match.snippet)

  return (
    <p dangerouslySetInnerHTML={{ __html: editedSnippet ? `${match.field}: ${editedSnippet}` : editedSnippets!.map(v => `<p>${match.field}: ${v}</p>`).join(" ") }}></p>
  )
}
