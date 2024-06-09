// PoemCard.js
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const PoemCard = ({ poem }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/poem/${poem.title}`);
  };

  return (
    <Card isPressable onClick={handleClick} className="min-w-60 min-h-60 flex p-2 md:w-50 wrap">
      <CardHeader>
        <p className="text-lg capitalize font-bold">{poem.title}</p>
      </CardHeader>
      <CardBody>
        <p className="text-lg capitalize">{poem.author}</p>
        {/* You can add more information here if needed */}
      </CardBody>
    </Card>
  );
};

export default PoemCard;
