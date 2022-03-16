import {json, LoaderFunction, useLoaderData} from "remix";
import Post from "~/components/post";
import {IPost} from "~/types/IPost";

export const loader: LoaderFunction = () => {
    const posts = [
        {
            id: 0,
            title: "APPLE MACBOOK AİR",
            content: "Apple Silicon 7 Core",
            slug: "a"
        },
        {
            id: 1,
            title: "APPLE MACBOOK PRO",
            content: "Intel i9 16 Core",
            slug: "b"
        },
        {
            id: 3,
            title: "IMac Pro",
            content: "Intel i9 16 Core",
            slug: "c"
        }
    ]
    return json(posts)
}


export default function Index() {
    const posts = useLoaderData<IPost[]>();
    return (
        <div>
            <Post posts={posts}/>
        </div>
    );
}
