"use server"

import { CollectionSchema } from "typesense/lib/Typesense/Collection";
import { getTypesenseClient } from "./TypesenseInstance"
import { Entity } from "@/types/entity";

export async function getEntitys() {
  const client = await getTypesenseClient();

  const collections = await client.collections().retrieve();

  return collections.map((v) => collectionToEntity(v));
}

function collectionToEntity(collection: CollectionSchema) {
  const entity: Entity = {
    name: collection.name,
    attributes: collection.fields ? collection.fields?.map(v => { return { name: v.name, type: v.type } }) : []
  }

  return entity;
}
