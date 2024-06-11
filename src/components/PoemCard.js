// components/PoemCard.js
import React from "react";
import { Button, Card } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const PoemCard = ({ poem }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/poem/${poem.title}`);
  };

  return (
    <Card
      isPressable
      onClick={handleClick}
      className="flex flex-col md:w-60 md:h-80 h-80 bg-white text-black"
      style={{ color: 'black', backgroundColor: 'white' }} // Ensure text is visible
    >
      <div className="z-2 absolute flex flex-col w-full h-full p-4 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold mt-4">{poem.title}</p>
          <p className="text-sm flex-shrink">by {poem.author}</p>
        </div>
        <p className="text-sm">{poem.lines.slice(0, 4).join(" ")}...</p>
        <Button size="xs" className="w-full" onClick={handleClick}>
          Read
        </Button>
      </div>
    </Card>
  );
};

export default PoemCard;
