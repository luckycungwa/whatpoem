import React, { useEffect, useState } from "react";
import PoemCard from "../components/PoemCard";
import { getRandomPoems } from "../services/api";
import { Button, Card, Tab, Tabs } from "@nextui-org/react";
import AuthorsList from "../components/AuthorsList";
import { MdArrowUpward } from "react-icons/md";

const Home = () => {
  const [poems, setPoems] = useState([]);
// get random poem from api
  useEffect(() => {
    const fetchRandomPoems = async () => {
      try {
        const data = await getRandomPoems();
        setPoems(data);
      } catch (error) {
        console.error("Error fetching random poems:", error);
      }
    };

    fetchRandomPoems();
  }, []);
  
  return (
    <>
      <div className="mx-auto px-4 py-6 justify-center align-center">
       {/* render random poem/cards with mini description */}
        <div className="flex w-full flex-col justify-center">
          <Tabs aria-label="Dynamic tabs" >
            <Tab
              title="Poems"
            >
            <div className="flex flex-col w-full h-full gap-4">
              {poems.map((poem, index) => (
                <PoemCard key={index} poem={poem} />
                
              ))}
              {/* load more x number of poems (limit i set in api SCript) */}
              <Button className="w-full" onClick={() => setPoems([...poems, ...poems])}>
                Load more
              </Button>
              </div>
            </Tab>
            
            <Tab title="Authors">
              <AuthorsList />
            </Tab>
          </Tabs>
        </div>
        <div className=" flex w-auto h-dvh justify-end absolute">
        {/* Go to the top of screen*/}
          <Button isIconOnly className="z-55 fixed w-12 h-12 bottom-9 right-0 mr-5 shadow-md bg-black/90 " onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <MdArrowUpward color="white" size={24} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
