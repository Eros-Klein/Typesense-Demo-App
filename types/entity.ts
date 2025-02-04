import { FieldType } from "typesense/lib/Typesense/Collection"

export type Entity = {
  name: string,
  attributes: { name: string, type: FieldType }[]
}
