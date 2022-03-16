import {json, LoaderFunction, useCatch, useLoaderData} from "remix";
import {IPost} from "~/types/IPost";
import invariant from "tiny-invariant";
import {Document} from "~/root";

export const loader: LoaderFunction = async ({params}) => {
    invariant(params.postSlug, "postSlug is required")
    const postSlug = params.postSlug
    if (!postSlug)
        throw new Response("NOT FOUND", {status: 404})
    const post = {
        id: 0,
        title: "APPLE MACBOOK AİR",
        content: "Apple Silicon 7 Core"
    }
    return json(post)
};

export const PostSlug = () => {
    const post = useLoaderData<IPost>();
    return (
        <div>
            <h1>
                {post.title}
            </h1>
        </div>
    )
}

export const CatchBoundary = () => {
    const caught = useCatch();
    return (
        <Document>
            <h1>Error</h1>
            <h2>{caught.statusText}</h2>
        </Document>
    )
}

export default PostSlug