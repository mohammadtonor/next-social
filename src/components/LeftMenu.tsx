import Link from "next/link"
import ProfileCard from "./ProfileCard"
import Image from "next/image"
import Advertisment from "./Advertisment"

const LeftMenu = ({type} : {type: "home" | "profile"}) => {
  return (
    <div className="flex flex-col gap-6">
      {type === 'home' && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-gray-500 flex flex-col gap-2">
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>Activity</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/market.png" alt="" width={20} height={20} />
          <span>Marketplace</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/courses.png" alt="" width={20} height={20} />
          <span>Courses</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/lists.png" alt="" width={20} height={20} />
          <span>Lists</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
        <Link href={'/'} className="flex  items-center gap-4 p-2 rounded-md hover:bg-slate-100">
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </Link>   
        <hr className="w-36 border-t-1 bg-gray-50 self-center"/>  
      </div>
      <Advertisment size="sm"/>
    </div>
  )
}

export default LeftMenu