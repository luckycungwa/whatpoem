import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPoemByTitle } from "../services/api";
import {
  Button,
  Card,
  CircularProgress,
  Divider,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import {
  MdArrowBack,
  MdArrowUpward,
  MdBookmarkAdd,
  MdBookmarkBorder,
  MdSave,
  MdSettings,
} from "react-icons/md";
import SettingsModal from "../components/SettingsModal";
import { useSettings } from "../contexts/SettingsContext";
import ShareButton from "../components/ShareButton";
import WriteReviewModal from "../components/WriteReviewModal";

const Poem = () => {
  const { title } = useParams(); // Fetch the poem title from the URL parameters
  const [poem, setPoem] = useState(null);
  const [SelectedTab, setSelectedTab] = useState("reading");
  const { background, font } = useSettings();
  const { onOpen } = useDisclosure();

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
    navigate(`/author/${poem.author}`); //view poems by author
  };

  return (
    <Card
      className="container mx-auto px-4 py-8 h-full"
      style={{ backgroundColor: background, fontFamily: font }}
      radius="md"
    >
      <Tabs
        aria-label="Dynamic tabs"
        className="w-full h-full justify-between"
        selectedKey={SelectedTab}
        onSelectionChange={setSelectedTab}
      >
        {/* Tab for return home & possible ads */}
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
          {/* render poem with clickable autor name */}
          {poem ? (
            <div className="flex flex-col w-full h-full gap-0 poemText">
              <h1 className="text-2xl font-bold mt-8">{poem.title}</h1>
              <p className="text-lg underline" onClick={handleClickAuthor}>
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
              <div className="flex gap-4 justify-between my-8">
                <Button
                  isIconOnly
                  color="danger"
                  className="w-10 h-10 shadow-md bg-black/90"
                >
                  {" "}
                  <MdBookmarkBorder size={24} />
                </Button>

                <WriteReviewModal />

                <ShareButton
                  shareUrl={`https://whatpoem.vercel.app/poem/${title}`}
                />
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-center items-center top-0 right-0 bg-black">
              {/* loading icon while fetching poem */}
              <CircularProgress color="default" aria-label="Loading..." />
            </div>
          )}
        </Tab>
        {/* Reviews tab after adding user auth functions & features */}
        <Tab key="writing" title="Reviews">
          <p className="text-center">Reviews coming soon...</p>
        </Tab>
        <Tab key="settings" title={<SettingsModal onPress={onOpen} />}></Tab>
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
