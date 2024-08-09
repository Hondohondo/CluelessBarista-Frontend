import {useEffect, useState} from "react";
import PostCard from "../components/PostCard.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";

function BlogPage() {
    //create a reactive variable to store some api info

    //initiaal value is an empty array
    const [posts, setPosts] = useState([]);

    /* async function getPosts() {

     }*/
    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();
        // console.log(data);
        setPosts(data);
    }


    useEffect(() => {
        getPosts();
    }, []);


    const postCards = posts.map((post) => {
        return (
            <li key={post.id}>
                <PostCard post={post} />
            </li>
        )
    })

    return (
        <>
            <HeaderComponent/>
            <section>
                <h2>Blog</h2>
                <ul>
                    {postCards}
                </ul>
            </section>
        </>


    )
}

export default BlogPage;