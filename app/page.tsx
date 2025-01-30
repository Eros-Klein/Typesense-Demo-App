import { searchClient } from "algoliasearch";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <InstantSearch searchClient={searchClient("", "")} indexName="bestbuy">
        <SearchBox />
        <Hits />
      </InstantSearch>

    </div>
  );
}
