import FilterButton from "@/components/FilterButton/FilterButton";
import TimeLine from "@/components/TimeLine/TimeLine";
import Link from "next/link";

export const metadata = {
    title: "KeenKeeper | Timeline",
    description: "A chronological history of your connections. Check when you last called or texted your friends.",
};

const TimeLinePage = () => {
    return (
        <div className="min-h-screen py-10 bg-[#F8FAFC]">
            <h1 className="text-3xl lg:text-4xl font-bold w-11/12 lg:w-8/12 mx-auto">TimeLine</h1>

            <div className="w-11/12 lg:w-8/12 mx-auto mt-10">
                <FilterButton/>
            </div>

            <TimeLine/>

            <div className="flex justify-center my-10">
                <Link href={'/'} className="btn btn-primary">Back</Link>
            </div>
        </div>
    );
};

export default TimeLinePage;