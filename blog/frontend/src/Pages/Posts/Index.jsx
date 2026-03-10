import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
export function Index() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://super-bassoon-r4gpq555q7vwcww55-8000.app.github.dev/api/posts").then((response)=>{
            setPosts(response.data);
        }).catch((error) => {
            console.error("Error fetching data: ", error);
        });
    },[]);

    const handleDeletePost = async (postId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this post?");
        if(!shouldDelete){
            return;
        }

        try {
            await axios.delete(`https://super-bassoon-r4gpq555q7vwcww55-8000.app.github.dev/api/posts/${postId}`)

            setPosts((prevPosts) => 
            prevPosts.filter((post) => post.id !== postId)

        );
        } catch (error) {
            console.error("Error deleting posts: ", error);
        }
    };
    return (
       <div>
        <div className="flex">
            <Link to="/posts/create" className="px-4 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600">Create new post</Link>
        </div>
        {
            posts && posts.slice().reverse().map((post) => (
                <div key={post.id} className="p-5 my-5 border rounded-md shadow-sm text-left">
                    <h2 className="mb-5 font-bold"><Link to={`posts/${post.id}`} state={{ id: post.id }}>{post.title}</Link></h2>
                    <p className="font-bold">{post.author}</p>
                    <p>{post.body}</p>
                    <div className="space-x-5 space-y-5">
                        <Link className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600" to={`posts/update/${post.id}`} state={post} >Edit Post</Link>
                        <button
                        onClick={() => handleDeletePost(post.id)}
                        className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500"> Delete Post</button>
                    </div>
                </div>
            ))
        }
       </div>
    )
}