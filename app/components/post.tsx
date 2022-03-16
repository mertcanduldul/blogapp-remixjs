import {IPost} from '~/types/IPost'
import {AiOutlineStock, AiOutlineArrowRight} from "react-icons/ai";
import {NavLink} from "@remix-run/react";

export default function Post({posts}: { posts: IPost[] }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom
                        Man Braid</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle
                        crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine,
                        ramps microdosing banh mi pug.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"/>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {
                        posts.map((post, number) => (
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" key={number}>
                                <div
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                    <AiOutlineStock size={48}/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{post.title}</h2>
                                    <p className="leading-relaxed text-base">{post.content}</p>
                                    <NavLink to={`posts/${post.slug}`}
                                             className="mt-3 text-green-500 inline-flex items-center">
                                        Detail
                                        <AiOutlineArrowRight/>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button
                    className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Hire
                    me !
                </button>
            </div>
        </section>
    )
}