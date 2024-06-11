import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuthors } from "../services/api";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      setIsLoading(true);
      
      try {
        const data = await getAuthors(); // Fetch list of authors from the API
        setAuthors(data);
      } 
      catch (error) {
        console.error("Error fetching authors:", error);
      }
      setIsLoading(false);
    };

    fetchAuthors();
  }, []);

  return (
    <div>
      <Listbox
        label="Select an author"
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[400px] overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        {authors.map((author) => (
          <ListboxItem
            key={author}
            endContent={<MdOutlineKeyboardArrowRight number={24} />}
            startContent={
              <div className="bg-success/10 text-success">
                <div className="w-8 h-8 background-color-success" />
              </div>
            }
          >
            {/* Navigate to View Poems by author from PoemsByAuthor */}
            <Link to={`/author/${author}`} style={{ textDecoration: 'none', color: 'inherit' }}>{author}</Link>
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};

export default AuthorsList;
