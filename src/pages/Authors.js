import React, { useEffect, useState } from "react";
import { getAuthors } from "../services/api";
import AuthorCard from "../components/AuthorCard";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <div>
        {authors.map((author) => (
          <div key={author}>
            <AuthorCard author={author} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Authors;
