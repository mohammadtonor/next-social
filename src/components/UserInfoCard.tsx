import Image from "next/image"
import Link from "next/link"

const UserInfoCard = ({userId}: {userId?: string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* Top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500"> User Information</span>
            <Link href='/' className="text-blue-500 text-xs">See All</Link>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Eiva Wearer</span>
            <span className="text-xs text-gray-500">@ei8vadev</span>
        </div>
        <div className="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div className="flex items-center gap-2">
            <Image
                src="/map.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
            />
            <span className="text-sm text-gray-500">Living in</span>            
            <span className="font-semibold text-gray-700">Denver</span>            
        </div>
        <div className="flex items-center gap-2">
            <Image
                src="/school.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
            />
            <span className="text-sm text-gray-500">Went to</span>            
            <span className="font-semibold text-gray-700">Edgar Hight School</span>            
        </div>
        <div className="flex items-center gap-2">
            <Image
                src="/work.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
            />
            <span className="text-sm text-gray-500">Works at Apple inc.</span>            
            <span className="font-semibold text-gray-700">Denver</span>            
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                <Image
                    src="/link.png"
                    alt=""
                    width={16}
                    height={16}
                    className=""
                />
                <Link href='/' className="bg-blue-200 text-blue-500">
                    lama.dev
                </Link>
            </div>
            <div className="flex items-center gap-1">
                <Image
                    src="/date.png"
                    alt=""
                    width={16}
                    height={16}
                    className=""
                />
                <span className="bg-blue-200 text-blue-500">Joined Novamber 2024</span>
            </div>
        </div>
        <button className="bg-blue-500 text-white rounded-md p-2">Follow</button>
        <span className="text-sm text-red-500 self-end cursor-pointer">Block user</span>
    </div>
  )
}

export default UserInfoCard