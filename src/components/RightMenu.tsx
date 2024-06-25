import Advertisment from "./Advertisment"
import Birthdays from "./Birthdays"
import FriendRequest from "./FriendRequest"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({userId}: {userId?: string}) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId}/>
          <UserMediaCard userId={userId}/>
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Advertisment size="md"/>
    </div>
  )
}

export default RightMenu