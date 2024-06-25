import Image from "next/image"

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={
            "https://res.cloudinary.com/dajdunc2w/image/upload/v1719326129/pexels-andreaedavis-5411787_1_fp1i70.jpg"
          }
          alt=""
          fill
          className="rounded-md"
        />
        <Image
          src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719326404/pexels-anete-lusina-5722866_1_uffpag.jpg"
          width={48}
          height={48}
          alt=""
          className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Edward Gabrial May</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <Image
              src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719326404/pexels-anete-lusina-5722866_1_uffpag.jpg"
              width={48}
              height={48}
              alt=""
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719326404/pexels-anete-lusina-5722866_1_uffpag.jpg"
              width={48}
              height={48}
              alt=""
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719326404/pexels-anete-lusina-5722866_1_uffpag.jpg"
              width={48}
              height={48}
              alt=""
              className="rounded-full w-3 h-3 object-cover"
            />
          </div>
          <span className="text-sm text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">My Profile</button>
      </div>
    </div>
  );
}

export default ProfileCard