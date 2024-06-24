import Image from "next/image"

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 ">
        {/* WRITE */}
        <div className="flex items-center gap-4">
            <Image 
                src={'https://res.cloudinary.com/dajdunc2w/image/upload/v1719241347/pexels-adamcole-photography-20806524_1_wgvobp.jpg'}
                alt=""
                width={40}
                height={40}
                className="w-8 h-8 object-cover rounded-full"
            />
            <div className="flex items-center justify-between bg-slate-100 rounded-lg text-sm px-6 py-2 w-full">
                <input 
                    type="text" 
                    placeholder="Leave a comment!" 
                    className="bg-transparent outline-none flex-1"
                />
                <Image 
                    src="/emoji.png"
                    alt=""
                    width={16}
                    height={16}
                    className="cursor-pointer"
                />
            </div>
        </div>
        {/* COMMENTS */}
        <div className="">
            <div className="flex gap-8 justify-between  mt-6">
                {/* AVATAR */}
                
                <Image 
                    src={'https://res.cloudinary.com/dajdunc2w/image/upload/v1719241347/pexels-adamcole-photography-20806524_1_wgvobp.jpg'}
                    alt=""
                    width={40}
                    height={40}
                    className="w-32 h-10 rounded-full"
                    />
                {/* DESC */}
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Patrik Scenner</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since 
                        the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen
                        book. 
                    </p>
                    <div className="flex gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                            <Image 
                                src="/like.png" 
                                alt=""
                                width={12}
                                height={12}
                                className="cursor-pointer w-4 h-4"
                            />
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-300">123 Likes</span>
                        </div>
                        <div className="">Reply</div>
                    </div>
                </div>
                {/* ICON */}
                <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"/>
            </div>
        </div>
    </div>
  )
}

export default Comments