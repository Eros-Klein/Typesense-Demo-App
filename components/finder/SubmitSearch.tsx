import { Entity } from "@/types/entity";
import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { useEffect, useState } from "react";
import { FieldType } from "typesense/lib/Typesense/Collection";
import { SearchResponse } from "typesense/lib/Typesense/Documents";
import ResultHeader from "./ResultHeader";
import ResultContents from "./ResultContents";

export default function SubmitSearch({ collection, attribute, value }: { collection?: Entity, attribute?: { name: string, type: FieldType }, value?: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [results, setResults] = useState<SearchResponse<Object> | undefined>()

  const processResults = async () => {
    const body = {
      collection: collection?.name,
      findBy: attribute?.name,
      searchValue: value
    }

    const response = await fetch("/api/find", {
      method: "POST",
      body: JSON.stringify(body)
    })

    console.log(JSON.stringify(body))

    if (response.status === 200) {
      const data: SearchResponse<Object> = await response.json()
      console.log(data)

      return data;
    }

    console.warn("Error with status ", response.status, " occured")

    return undefined;
  }

  const processMissingValResponse = () => {
    if (!collection) {
      return <p>No collection was specified</p>
    }
    else if (!attribute) {
      return <p>No attribute was specified</p>
    }
    else if (!value) {
      return <p>No value was provided</p>
    }
  }

  useEffect(() => {
    (async () => {
      if (collection && attribute && value) {
        setResults(await processResults())
      }
    })()
  }, [collection, attribute, value])

  return (
    <div className="flex flex-col gap-2">
      <Button color="secondary" className="font-bold text-xl" onPress={onOpen}>Submit</Button>
      <Modal isOpen={isOpen} scrollBehavior="inside" onOpenChange={onOpenChange} size="5xl">
        <ModalContent className="h-[70svh]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">Search Results</ModalHeader>
              <ModalBody>
                {!collection || !attribute || !value || !results ? <div className="flex flex-col justify-center items-center h-full font-bold text-xl">{processMissingValResponse()}</div> : (
                  <div className="flex flex-col gap-2 justify-start items-center w-full overflow-hidden">
                    <ResultHeader searchResults={results} />
                    <span className="h-0.5 w-2/3 bg-secondary rounded-full" />
                    <ResultContents collection={collection.name} headerVal={attribute.name} searchResults={results} />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
