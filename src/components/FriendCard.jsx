import Image from "next/image";
import StatusBadge from "./StatusBadge";

const FriendCard = ({ friend }) => {
  const { picture, name, days_since_contact, tags, status } = friend;
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="rounded-full">
        <Image
          className="rounded-full"
          src={picture}
          alt={`Picture of ${name}`}
          width={80}
          height={80}
        ></Image>
      </div>

      <h3 className="text-xl font-semibold my-3" style={{ color: "#1F2937" }}>
        {name}
      </h3>

      <p className="text-xs" style={{ color: "#64748B" }}>
        {days_since_contact}d ago
      </p>

      <div className="flex items-center gap-2">
        {tags.map((tag, index) => (
          <span
            className="text-xs font-medium px-2 py-1 rounded-full my-2 uppercase"
            style={{ backgroundColor: "#CBFADB", color: "#244D3F" }}
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <StatusBadge status = {status}/>
      </div>
    </div>
  );
};

export default FriendCard;
