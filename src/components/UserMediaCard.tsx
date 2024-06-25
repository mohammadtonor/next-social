import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}: {userId?: string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* Top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500"> User Media</span>
            <Link href='/' className="text-blue-500 text-xs">See All</Link>
        </div>
        <div className="flex gap-4 justify-between flex-wrap">
            <div className="relative w-1/5 h-24">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1719255352/pexels-alleksana-6955469_ylrdbu.jpg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative w-1/5 h-24">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719239604/pexels-alinaskazka-25539612_d71fbn.jpg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative w-1/5 h-24">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1719255352/pexels-alleksana-6955469_ylrdbu.jpg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative w-1/5 h-24">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1719255352/pexels-alleksana-6955469_ylrdbu.jpg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative w-1/5 h-24">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1719255352/pexels-alleksana-6955469_ylrdbu.jpg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative w-1/5 h-24">
                <Image 
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1719255352/pexels-alleksana-6955469_ylrdbu.jpg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default UserMediaCard