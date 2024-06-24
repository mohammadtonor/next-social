import Link from "next/link"
import MobaileMenu from "./MobaileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-500">
          LAMASOCIAL
        </Link>
      </div>
      {/** Center */}
      <div className="hidden md:flex w-[50%] justify-between items-center">
        <div className="flex gap-4 ">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="Homepage"
              className="w-4 h-4"
              width={16}
              height={16}
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="friends"
              className="w-4 h-4"
              width={16}
              height={16}
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="Stories"
              className="w-4 h-4"
              width={16}
              height={16}
            />
            <span>Stories</span>
          </Link>
        </div>
            <div className="hidden xl:flex p-2 bg-slate-100 items-center">
                <input type="text" placeholder="Search..." className="bg-transparent outline-none"/>
                <Image src='/search.png' alt='' width={14} height={14}/>
            </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="hidden md:flex gap-4 items-center">
                <div className="cursor-pointer">
                    <Image src="/people.png" alt="" width={24} height={24} />
                </div>
                <div className="cursor-pointer">
                    <Image src="/messages.png" alt="" width={24} height={24} />
                </div>
                <div className="cursor-pointer">
                    <Image src="/notifications.png" alt="" width={24} height={24} />
                </div>
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobaileMenu />
      </div>
    </div>
  );
}

export default Navbar