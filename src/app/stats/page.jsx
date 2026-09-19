import ActivityChart from "@/components/Charts/ActivityChart";
import Link from "next/link";

export const metadata = {
    title: "KeenKeeper | Activity Stats",
    description: "Visualize your social interactions. Analyze how much time you spend on calls, texts and video chats with your friends.",
}

const StatsPage = () => {
    return (
        <div className="py-10 bg-[#F8FAFC">
            <div className="w-11/12 lg:w-8/12 mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold">FriendShip Analytics</h1>

                <div className="shadow mt-10 py-10 bg-gray-200">
                    <h1 className="font-extrabold px-5 pb-5 text-xl">By Interaction Type</h1>

                    <ActivityChart/>
                </div>

                <div className="flex justify-center my-10">
                    <Link href={'/'} className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;