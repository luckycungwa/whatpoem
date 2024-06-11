import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPoemsByAuthor } from "../services/api";
import PoemCard from "../components/PoemCard";
import { Button, Card } from "@nextui-org/react";
import { MdArrowUpward } from "react-icons/md";

const PoemsByAuthor = () => {
  const { author } = useParams();
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const data = await getPoemsByAuthor(author);
        setPoems(data);
      } catch (error) {
        console.error("Error fetching poems by author:", error);
      }
    };

    fetchPoems();
  }, [author]);

  return (
    <>
    <div className="container mx-auto">
        {/* Sticky header with author name */}
        <div className="sticky top-0 bg-black/90  w-full h-auto py-2 z-10 text-white shadow-lg">
          <h1 className="text-3xl font-bold text-center">Poems by</h1>
          <p className="text-center">{author}</p>
        </div>
        <Card className="mx-auto px-4 py-8" radius="md">
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {poems.map((poem, index) => (
              <PoemCard key={index} poem={poem} />
            ))}
          </div>
        </Card>
        {/* Fixed button to scroll to the top */}
        <div className="fixed bottom-9 right-0 mr-5">
          <Button
            isIconOnly
            color="danger"
            className="w-12 h-12 shadow-md bg-black/90 "
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <MdArrowUpward size={24} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default PoemsByAuthor;
