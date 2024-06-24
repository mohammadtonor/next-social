import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://res.cloudinary.com/dajdunc2w/image/upload/v1719180554/pexels-liane-cumming-224181355-15045083_rgybeu.jpg"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="">
        {/* TEXT INPUT */}
        <div className=""></div>
        {/* POST OPTIONS */}
        <div className=""></div>
      </div>
    </div>
  );
}

export default AddPost