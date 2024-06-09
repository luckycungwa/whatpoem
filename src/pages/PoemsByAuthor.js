import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPoemsByAuthor } from "../services/api";
import PoemCard from '../components/PoemCard';

const PoemsByAuthor = () => {
    const { author } = useParams();
    const [poems, setPoems] = useState([]);

    useEffect(() => {
        getPoemsByAuthor(author).then(setPoems);
    }, [author]);

    return (
        <div>
            <div gap={2}>
                {poems.map(poem => (
                    <div key={poem.title}>
                        <PoemCard poem={poem} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PoemsByAuthor;
