import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPoemByTitle } from "../services/api";
import {
  Button,
  Card,
  CircularProgress,
  Divider,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { MdArrowBack, MdArrowUpward, MdSettings } from "react-icons/md";
import SettingsModal from "../components/SettingsModal";
import { useSettings } from "../contexts/SettingsContext";

const Poem = () => {
  const { title } = useParams(); // Fetch the poem title from the URL parameters
  const [poem, setPoem] = useState(null);
  const [SelectedTab, setSelectedTab] = useState("reading");
  const { background, font } = useSettings();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const data = await getPoemByTitle(title); // Fetch the poem by title
        setPoem(data);
      } catch (error) {
        console.error("Error fetching poem:", error);
      }
    };

    fetchPoem();
  }, [title]);

  const handleClickAuthor = () => {
    navigate(`/author/${poem.author}`);
  };

  return (
    <Card
      className="container mx-auto px-4 py-8 h-full"
      style={{ backgroundColor: "transparent", fontFamily: font }}
      radius="md"
    >
   
      <Tabs
        aria-label="Dynamic tabs"
        className="w-full justify-between"
        selectedKey={SelectedTab}
        onSelectionChange={setSelectedTab}
      >
        <Tab
          key="back"
          title={<MdArrowBack size={16} onClick={() => navigate(-1)} />}
        >
          <div className="flex flex-col w-full h-full gap-4 justify-center align-center">
            <p className="text-center">Adverts & promos here</p>
            <Card className="mx-auto px-4 py-8" radius="md">
              <div className="flex gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                Advert 01
              </div>
            </Card>
            <Card className="mx-auto px-4 py-8" radius="md">
              <div className="flex gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                Advert 02
              </div>
            </Card>
            <Card className="mx-auto px-4 py-8" radius="md">
              <div className="flex gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                Advert 03
              </div>
            </Card>
            <Card className="mx-auto px-4 py-8" radius="md">
              <div className="flex gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                Advert 04
              </div>
            </Card>
            <Card className="mx-auto px-4 py-8" radius="md">
              <div className="flex gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                Advert 05
              </div>
            </Card>
          </div>
        </Tab>

        <Tab key="reading" title="Reading Mode">
          {poem ? (
            <div className="flex flex-col w-full h-full gap-0 poemText">
              <h1 className="text-2xl font-bold mt-8">{poem.title}</h1>
              <p className="text-lg" onClick={handleClickAuthor}>
                By {poem.author}
              </p>
              <p className="text-small font-light">{poem.lines.length} Lines</p>
              <div className="text-md leading-relaxed py-8">
                {poem.lines.map((line, index) => (
                  <p className="mb-0 w-full" key={index}>
                    {line}
                  </p>
                ))}
              </div>
              <Divider />
              <p className="text-center my-4">End of Poem</p>
            </div>
          ) : (
            <CircularProgress color="default" aria-label="Loading..." />
          )}
        </Tab>
        <Tab key="writing" title="Reviews">
          <p>Reviews</p>
        </Tab>
        <Tab key="settings" title="">
          <SettingsModal />
        </Tab>
      </Tabs>
      {/* button to scroll smoothly to the top */}
      <div className="flex w-auto h-dvh justify-end absolute">
        <Button
          isIconOnly
          className="z-99 fixed w-12 h-12 bottom-8 right-0 mr-5 shadow-md bg-black/90 text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <MdArrowUpward size={24} />
        </Button>
      </div>
    </Card>
  );
};

export default Poem;
