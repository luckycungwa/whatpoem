import React, { useEffect, useState } from "react";
import PoemCard from "../components/PoemCard";
import { getRandomPoems } from "../services/api"; 

const Home = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const fetchRandomPoems = async () => {
      try {
        const data = await getRandomPoems(); // Fetch random poems from the API
        setPoems(data);
      } catch (error) {
        console.error("Error fetching random poems:", error);
      }
    };

    fetchRandomPoems();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {poems.map((poem, index) => (
        <PoemCard key={index} poem={poem} />
      ))}
    </div>
  );
};

export default Home;
