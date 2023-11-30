// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Form} from "./components/Form/Form.jsx";
import {useState} from "react";
import {Feed} from "./components/Feed/Feed.jsx";

export default function App() {

    const initialPosts = [
        {
            firstName: "Andrii",
            lastName: "Rusanovych",
            email: "a.dovgyj@gmail.com",
            comment: "my comment ",
            color: "#ccc"
        },
        {
            firstName: "Andrii",
            lastName: "Rusanovych",
            email: "a.dovgyj@gmail.com",
            comment: "From the above example, it should now be clear how we can use PropTypes. You can also see how useful they are for debugging your apps when the app is too big to find the bug with just conventional methods. ",
            color: "#cfc"
        },
        {
            firstName: "Andrii",
            lastName: "Rusanovych",
            email: "a.dovgyj@gmail.com",
            comment: "my comment ",
            color: "#fcc"
        }

    ]
    const [posts, setPosts] = useState(initialPosts);

    const onPostCreate = (post) => {
        setPosts([...posts, post])
    }

    return (
        <div>
            <Form onSubmit={onPostCreate}/>
            <Feed posts={posts} />
        </div>
    )
}
