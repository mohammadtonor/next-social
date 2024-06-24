import Image from "next/image"
import Link from "next/link"

const FriendRequest = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* Top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Request</span>
            <Link href='/' className="text-blue-500 text-xs">See All</Link>
        </div>
        {/* Botton */}
        <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
                <Image
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719246799/pexels-esrakorkmaz-25745076_eonbrk.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10"
                />
                <span>Junny Burton</span>
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                <Image
                    src="/reject.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </div>
        </div>
        <div className="flex items-center justify-between gap-4 ">
            <div className="flex gap-4 items-center">
                <Image
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719246799/pexels-esrakorkmaz-25745076_eonbrk.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10"
                />
                <span>Junny Burton</span>
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                <Image
                    src="/reject.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </div>
        </div>
        <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
                <Image
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719246799/pexels-esrakorkmaz-25745076_eonbrk.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10"
                />
                <span>Junny Burton</span>
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                <Image
                    src="/reject.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </div>
        </div>
    </div>
  )
}

export default FriendRequest