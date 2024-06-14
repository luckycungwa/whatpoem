import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import { MdComment } from "react-icons/md";

const WriteReviewModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}><MdComment size={24} /></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Write A Review
              </ModalHeader>
              <ModalBody>
                <Textarea
                isRequired
                  isInvalid={false}
                  labelPlacement="outside"
                  variant="bordered"
                  minRows={5}
                  label="Review"
                  placeholder="share your thoughts..."
                //   defaultValue="share your thoughts..."
                  errorMessage="Review should be at least 10 characters long."
                  className="max-w-xs"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default WriteReviewModal;
