import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { MdSettings } from "react-icons/md";
import { useSettings } from "../contexts/SettingsContext";
import ThemeSwitch from "./ThemeSwitch"

const SettingsModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { font, setFont, background, setBackground, theme, setTheme } = useSettings();

  const [tempFont, setTempFont] = useState(font);
  const [tempBackground, setTempBackground] = useState(background);
  const [tempTheme, setTempTheme] = useState(theme);

  const fonts = ["Poppins", "Montserrat", "Bellota", "Oswald", "Cormorant Garamond", "Bacasime Antique"];
  const backgrounds = ["#F9F5F6", "#3F4E4F", "#D2E0FB", "#363333", "#D0E7D2", "#1B262C"];

  useEffect(() => {
    document.body.style.backgroundColor = tempTheme === "light" ? tempBackground : "#121212";

  }, [tempFont, tempBackground, tempTheme]);

  const handleApply = () => {
    setFont(tempFont);
    setBackground(tempBackground);
    onOpenChange(false);
    // check if theme is light or dark. if dark change background color too or else change background to light unless background color is selected.
    if (tempTheme === "dark") {
      document.body.style.backgroundColor = tempBackground;
    } else {
      document.body.style.backgroundColor = "#F9F5F6";
    }

  };

  const handleCancel = () => {
    setTempFont(font);
    setTempBackground(background);
    setTempTheme(theme);
    onOpenChange(false);
  };

  return (
    <>
      <div>
        <Button isIconOnly onPress={onOpen} color="none">
          <MdSettings size={24} />
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="px-0 my-2">
            {(onClose) => (
              <>
                <ModalHeader className="z-99 flex flex-col gap-1">
                  Settings
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col ">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col w-full gap-2 pb-4 m-0 ">
                        <div className="flex flex-row justify-between  items-center h-10">
                          Theme
                          
                          <p>{tempTheme}</p>
                          <ThemeSwitch
                            isSelected={tempTheme === "dark"}
                            onChange={() =>
                              setTempTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
                            }
                          />
                        </div>
                        <div className="flex flex-row justify-between items-center h-10">
                          Background
                          <div className="flex flex-row gap-2">
                            {backgrounds.map((bg, index) => (
                              <div
                                key={index}
                                className={`w-6 h-6 radius-full cursor-pointer ${bg === tempBackground ? 'border-2 border-black' : ''}`}
                                style={{ backgroundColor: bg }}
                                onClick={() => setTempBackground(bg)}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center h-10">
                          Font
                          <div className="flex flex-row gap-2">
                            {fonts.map((f, index) => (
                              <p
                                key={index}
                                className={`font-bold cursor-pointer ${f === tempFont ? 'underline' : ''}`}
                                style={{ fontFamily: f }}
                                onClick={() => setTempFont(f)}
                              >
                                Aa
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <Divider className="px-8" />
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={handleCancel}>
                    Cancel
                  </Button>
                  <Button color="default" onPress={handleApply}>
                    Apply
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default SettingsModal;
