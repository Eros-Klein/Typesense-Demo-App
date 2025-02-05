import { Entity } from "@/types/entity";
import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { FieldType } from "typesense/lib/Typesense/Collection";
import { SearchResponse } from "typesense/lib/Typesense/Documents";

export default function SubmitSearch({ collection, attribute, value }: { collection?: Entity, attribute?: { name: string, type: FieldType }, value?: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const processResults = async () => {
    const body = {
      collection: collection?.name,
      findBy: attribute,
      searchValue: value
    }

    const response = await fetch("/api/find", {
      method: "POST",
      body: JSON.stringify(body)
    })

    const data: SearchResponse<Object> = await response.json()

    console.log(data)

    return (
      <div></div>
    )
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

  return (
    <div className="flex flex-col gap-2">
      <Button color="secondary" className="font-bold text-xl" onPress={onOpen}>Submit</Button>
      <Modal isOpen={isOpen} scrollBehavior="inside" onOpenChange={onOpenChange} size="5xl">
        <ModalContent className="h-[70svh]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">Search Results</ModalHeader>
              <ModalBody>
                {!collection || !attribute || !value ? <div className="flex flex-col justify-center items-center h-full font-bold text-xl">{processMissingValResponse()}</div> : processResults()}
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
