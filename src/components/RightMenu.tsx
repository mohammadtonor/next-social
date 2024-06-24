import Advertisment from "./Advertisment"
import Birthdays from "./Birthdays"
import FriendRequest from "./FriendRequest"

const RightMenu = ({userId}: {userId?: string}) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequest />
      <Birthdays />
      <Advertisment size="md"/>
    </div>
  )
}

export default RightMenu