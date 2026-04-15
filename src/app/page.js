import friends from './data/friends.json';
import FriendCard from '@/components/FriendCard';

const HomePage = () => {
  
  return (
    <section style={{ padding: "80px 16%", backgroundColor: "#F8FAFC" }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold" style={{ color: "#1F2937" }}>
          Friends to keep close in your life
        </h1>
        <p className="text-base mt-3" style={{ color: "#64748B" }}>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>

        <button
          className="mt-8 px-4 py-3 rounded text-white font-medium"
          style={{ backgroundColor: "#244D3F" }}
        >
          + Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div className="p-8 text-center space-y-2  bg-white shadow-sm rounded-lg">
          <h3 className=" text-3xl font-semibold" style={{ color: "#244D3F" }}>
            12
          </h3>
          <p className="text-lg" style={{ color: "#64748B" }}>
            Total Friends
          </p>
        </div>

        <div className="p-8 text-center space-y-2  bg-white shadow-sm rounded-lg">
          <h3 className=" text-3xl font-semibold" style={{ color: "#244D3F" }}>
            3
          </h3>
          <p className="text-lg" style={{ color: "#64748B" }}>
            On Track
          </p>
        </div>

        <div className="p-8 text-center space-y-2  bg-white shadow-sm rounded-lg">
          <h3 className=" text-3xl font-semibold" style={{ color: "#244D3F" }}>
            6
          </h3>
          <p className="text-lg" style={{ color: "#64748B" }}>
            Need Attention
          </p>
        </div>

        <div className="p-8 text-center space-y-2  bg-white shadow-sm rounded-lg">
          <h3 className=" text-3xl font-semibold" style={{ color: "#244D3F" }}>
            12
          </h3>
          <p className="text-lg" style={{ color: "#64748B" }}>
            Interactions This Month
          </p>
        </div>
      </div>

      <div className="py-10">
        <hr
          style={{ backgroundColor: "#E9E9E9", border: "none", height: "1px" }}
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-5" style={{ color: "#1F2937" }}>
          Your Friends
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {friends.map((friend, index) => <FriendCard friend={friend} key={index}>hi friend</FriendCard>)}
        </div>
      </div>
    </section>
  );
};

export default HomePage;