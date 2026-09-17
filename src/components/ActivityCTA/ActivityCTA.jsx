'use client'
import { FriendContext } from "@/contexts/FriendsProvider";
import { useContext } from "react";
import { IoMdText, IoMdVideocam } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { toast } from "react-toastify";

const ActivityCTA = ({friend}) => {
    const {timeLine, setTimeLine} = useContext(FriendContext)

    const handleCTA = (type) => {
        const addFriends = {
            ...friend, activityType: type, timestamp: new Date().toLocaleDateString('en-GB')
        }
        setTimeLine([...timeLine, addFriends])
        toast.success(`${addFriends.name} ${type} ${new Date().toLocaleDateString('en-GB')}`)
    }
    return (
      <div className="flex flex-col lg:flex-row gap-3">
        <button
          onClick={() => handleCTA("call")}
          className={`btn py-14 px-20 text-2xl flex flex-col justify-center text-center`}
        >
          <span>
            <MdWifiCalling3 />
          </span>
          Call
        </button>

        <button
          onClick={() => handleCTA("text")}
          className={`btn py-14 px-20 text-2xl flex flex-col justify-center text-center`}
        >
          <span>
            <IoMdText />
          </span>
          Text
        </button>

        <button
          onClick={() => handleCTA("video")}
          className={`btn py-14 px-20 text-2xl flex flex-col justify-center text-center`}
        >
          <span>
            <IoMdVideocam />
          </span>
          Video
        </button>
      </div>
    );
};

export default ActivityCTA;