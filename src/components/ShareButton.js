import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { CiLink, CiShare1 } from "react-icons/ci";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  EmailIcon,
} from "react-share";
import { MdContentCopy } from "react-icons/md";

const ShareButton = ({ shareUrl }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isIconOnly onPress={onOpen}>
        <CiShare1 size={18} />
      </Button>
      {/* <Button onPress={onOpen}><MdShare size={24} /> Share</Button> */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold">
                Share
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
               
                <div className="flex flex-row flex-wrap justify-between">
                  <WhatsappShareButton
                    url={shareUrl}
                    className="gap-1 w- justify-center items-center flex flex-col"
                  >
                    <WhatsappIcon size={42} round />
                    <p className="text-center text-xs">Whatsapp</p>
                  </WhatsappShareButton>

                  <FacebookShareButton
                    url={shareUrl}
                    className="gap-1 w- justify-center items-center flex flex-col"
                  >
                    <FacebookIcon size={42} round />
                    <p className="text-center text-xs">Facebook</p>
                  </FacebookShareButton>

                  <TwitterShareButton
                    url={shareUrl}
                    className="gap-1 w- justify-center items-center flex flex-col"
                  >
                    <TwitterIcon size={42} round />
                    <p className="text-center text-xs">Twitter</p>
                  </TwitterShareButton>

                  <TelegramShareButton
                    url={shareUrl}
                    className="gap-1 w- justify-center items-center flex flex-col"
                  >
                    <TelegramIcon size={42} round />
                    <p className="text-center text-xs">Telegram</p>
                  </TelegramShareButton>

                  <EmailShareButton
                    url={shareUrl}
                    className="gap-1 w- justify-center items-center flex flex-col"
                  >
                    <EmailIcon size={42} round />
                    <p className="text-center text-xs">Email</p>
                  </EmailShareButton>
                </div>
                <p className="font-medium text-sm flex-col flex gap-2 mt-4 ">
                  Page Link:
                  <Input
                    readOnly
                    type="text"
                    placeholder={shareUrl}
                    labelPlacement="outside"
                    startContent={<CiLink size={16} />}
                    endContent={<MdContentCopy size={16} />}
                    className="select-all"
                  />
                </p>
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareButton;
