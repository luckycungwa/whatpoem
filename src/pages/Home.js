// pages/Home.js
import React, { useEffect, useState } from "react";
import PoemCard from "../components/PoemCard";
import { getRandomPoems } from "../services/api";
import { Button, Card, Tab, Tabs } from "@nextui-org/react";
import AuthorsList from "../components/AuthorsList";
import { MdArrowUpward } from "react-icons/md";

const Home = () => {
  const [poems, setPoems] = useState([]);

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
      <div className="mx-auto px-4 py-6 bg-gray justify-center align-center">
       
        <div id="theme-bg" className="flex w-full flex-col justify-center">
          <Tabs aria-label="Dynamic tabs" >
            <Tab
              title="Poems"
              className=""
              
            >
            <div className="flex flex-col w-full h-full gap-4">
              {poems.map((poem, index) => (
                <PoemCard key={index} poem={poem} />
                
              ))}
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
          <Button isIconOnly className="z-55 fixed w-12 h-12 bottom-9 right-0 mr-5 shadow-md bg-black/90 " onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <MdArrowUpward color="white" size={24} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
