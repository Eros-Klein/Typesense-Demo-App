export type Match = {
  field: keyof Object;
  snippet?: string;
  value?: string;
  snippets?: string[];
  indices?: number[];
  matched_tokens: string[][] | string[];
}
