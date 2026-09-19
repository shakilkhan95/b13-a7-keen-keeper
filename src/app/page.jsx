import Friends from "../../public/friends.json";
import Banner from "../components/Banner/Banner";
import FriendCards from "../components/Ui/FriendCards/FriendCards";

export default function Home() {
    return(
        <>
        <div className="bg-[#F8FAFC]">
            <Banner />

           {/* Friends Section */}
           <div className="w-11/12 mx-auto">
                <h1 className="text-3xl font-bold">Your Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                    {Friends.map((friend) => <FriendCards key={friend.id} friend={friend} />)}
                </div>
           </div>
        </div>
        </>
    )
}