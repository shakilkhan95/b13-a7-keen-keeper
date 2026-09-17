import { MdWifiCalling3 } from "react-icons/md";

const ActivityCTA = ({friend}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-3">
            <button className={`btn py-14 px-20 text-2xl flex flex-col justify-center`}><span><MdWifiCalling3/>Call</span></button>
        </div>
    );
};

export default ActivityCTA;