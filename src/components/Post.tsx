import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* User */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719180554/pexels-liane-cumming-224181355-15045083_rgybeu.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="w-12 h-12 object-cover rounded-full"
                />
                <span className="font-medium">Jack McBride</span>
            </div>
            <Image 
                src="/more.png"
                alt=""
                width={16}
                height={16}
            />
        </div>    
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719239604/pexels-alinaskazka-25539612_d71fbn.jpg"
                    fill
                    className="object-cover rounded-md"
                    alt=""
                />
            </div>
            <p>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen
                 book. 
            </p>
        </div>
        {/* ACTION */}
        <div className="flex items-center justify-between my-4 text-sm">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/like.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">
                        123<span className="hidden md:inline">Likes</span>
                    </span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/comment.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">
                        123<span className="hidden md:inline">Comments</span>
                    </span>
                </div>
                
            </div>
            <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/share.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">
                        123<span className="hidden md:inline">Share</span>
                    </span>
                </div>
            </div>
        </div>
        <Comments />
    </div>
  )
}

export default Post