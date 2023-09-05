import { useState } from "react";
import GetOrders from "../components/get-orders";
import GetItems from "../components/get-items";

const Home = () => {
  const [getOrders, setGetOrders] = useState(true);

  return (
    <div className='bg-[#F9FAFB] h-screen w-screen flex items-center justify-center'>
      <div className=' w-full h-[300px] flex flex-col items-center justify-center space-y-[32px] mx-auto'>
        <div className='space-y-[32px]'>
          <div className='space-y-[16px]'>
            <h2>All Orders</h2>
            <GetOrders getOrders={getOrders} setGetOrders={setGetOrders} />
          </div>
          <div className='space-y-[16px]'>
            <h2>All Orders</h2>
            <GetItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
