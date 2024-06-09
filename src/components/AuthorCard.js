import { Card } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorCard = ({ author }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/author/${author}`);
    };

    return (
        <Card onClick={handleClick}>
            <Card.Body>
                <p>{author}</p>
            </Card.Body>
        </Card>
    );
};

export default AuthorCard;
