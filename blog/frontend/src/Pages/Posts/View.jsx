import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export default function View() {
    const { state } = useLocation();

    const [author, setAuthor] = useState(state?.author || "");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        axios.get(`https://super-bassoon-r4gpq555q7vwcww55-8000.app.github.dev/api/posts/${state.id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setTitle(response.data.title);
                setBody(response.data.body);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [state.id]);

    return (
        <div>
            <div className="flex flex-col space-y-8 text-left">
                <h1 className="mx-auto text-xl">{title}</h1>
                <p>By: {author}</p>
                <p>{body}</p>
            </div>
        </div>
    );
}