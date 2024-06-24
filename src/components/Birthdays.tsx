import Image from "next/image"
import Link from "next/link"

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Request</span>
        </div>
        {/* Botton */}
        <div className="flex items-center justify-between gap-4 mt-4">
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
            <div className="">
                <button className="bg-blue-500 text-white text-xs rounded-md px-2 py-1">Celebrate</button>
            </div>
        </div>
        <div className="p-4 bg-slate-100 flex items-center gap-4 mt-4">
            <Image
                src="/gift.png"
                alt=""
                width={24}
                height={24}
                className="rounded-full w-10 h-10"
            />
            <Link href={'/'} className="flex flex-col gap-1 items-center text-xs">
                <span className="text-gray-700 font-semibold">Upcomming Birthday</span>
                <span className="text-gray-500">Send a congrogulate </span>
            </Link>
        </div>
    </div>
  )
}

export default Birthdays