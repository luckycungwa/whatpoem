// Poem.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPoemByTitle } from "../services/api";
import { CircularProgress } from "@nextui-org/react";

const Poem = () => {
  const { title } = useParams(); // Fetch the poem title from the URL parameters
  const [poem, setPoem] = useState(null);

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

  return (
    <div className="container mx-auto px-4 py-8">
      {poem ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{poem.title}</h1>
          <p className="text-lg mb-2">By {poem.author}</p>
          <p className="text-lg mb-2">Line Count: {poem.lines.length}</p>
          <div className="text-lg leading-relaxed">
            {poem.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      ) : (
        <CircularProgress color="default" aria-label="Loading..."/>
      )}
    </div>
  );
};

export default Poem;
