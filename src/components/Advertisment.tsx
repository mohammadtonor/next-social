import Image from "next/image"

const Advertisment = ({ size }: {size: "sm" | "md" | "lg"}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
        <div className="flex justify-between items-center text-gray-500 font-medium">
            <span className="">Sponsered Ad</span>
            <Image
                src="/more.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
            />
        </div>
        <div className={`flex flex-col mt-4 ${size === "sm" ? 'gap-2' : 'gap-4'}`}>
            <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-32' : 'h-48'}`}>
                <Image
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1719255352/pexels-alleksana-6955469_ylrdbu.jpg"
                    alt=""
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="flex items-center gap-4">
                <Image
                    src="https://res.cloudinary.com/dajdunc2w/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1719255352/pexels-alleksana-6955469_ylrdbu.jpg"
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full w-6 h-6 object-cover"
                />
                <span className="text-blue-500 font-medium">BiChef Lounge</span>
            </div>  
            <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
                {size === 'sm' ? 
                 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' : 
                  size === 'md' ?
                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" : 
                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}    
            </p>   
            <button className="bg-gray-200 text-gray-500 rounded-lg text-sm p-2">Learn more</button>
        </div>
    </div>
  )
}

export default Advertisment