// Poem.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPoemByTitle } from "../services/api";
import { Button, Card, CircularProgress, Tab, Tabs } from "@nextui-org/react";
import { MdArrowBack, MdArrowUpward } from "react-icons/md";

const Poem = () => {
  const { title } = useParams(); // Fetch the poem title from the URL parameters
  const [poem, setPoem] = useState(null);
  const [SelectedTab, setSelectedTab] = useState("reading");

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

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Card className="container mx-auto px-4 py-8 h-full" radius="md">
      {/* button to scroll smothly to te top */}
      <div className=" flex w-auto h-dvh justify-end absolute">
        <Button
          isIconOnly
          color="danger"
          className="z-55 fixed w-12 h-12 bottom-8 right-0 mr-5 shadow-md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <MdArrowUpward size={24} />
        </Button>
      </div>
      <Tabs
        aria-label="Dynamic tabs"
        className="w-full"
        selectedKey={SelectedTab}
      >
        <Tab
          key="back"
          // title={<MdArrowBack size={16}/>  }
          className="w-full textfont-bold"
          onSelectionChange={setSelectedTab}
        >
          <MdArrowBack size={16} onClick={() => navigate(-1)} />
        </Tab>
        <Tab
          key="reading"
          title="Reading Mode"
          className="w-full textfont-bold"
          onSelectionChange={setSelectedTab}
        >
          {poem ? (
            <div className="flex flex-col w-full h-full background-color-blue gap-0">
              <h1 className="text-2xl font-bold">{poem.title}</h1>
              <p className="text-lg" onClick={handleClickAuthor}>
                By {poem.author}
              </p>
              <p className="text-lg font-light ">{poem.lines.length} Lines</p>
              <div className="text-md leading-relaxed py-8">
                {poem.lines.map((line, index) => (
                  <p className="mb-0 w-full " key={index}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <CircularProgress color="default" aria-label="Loading..." />
          )}
        </Tab>
       
        
      </Tabs>
    </Card>
  );
};

export default Poem;
