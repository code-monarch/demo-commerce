import { useState } from "react";
import CreateOrderForm from "../components/create-order-form";
import GetOrders from "../components/get-orders";

const Home = () => {
  const [createOrderForm, setCreateOrderForm] = useState(false);
  const [getOrders, setGetOrders] = useState(true);

  return (
    <div className='bg-[#F9FAFB] h-screen w-screen flex items-center justify-center'>
      <div className=' w-full h-[300px] flex flex-col items-center justify-center space-y-[32px] mx-auto'>
        <div className='w-full flex justify-center items-center gap-x-4'>
          <button
            className='bg-green-500 text-white py-2 px-3 rounded-sm'
            onClick={() => setCreateOrderForm(!createOrderForm)}
          >
            Create an Order
          </button>
        </div>

        {createOrderForm && <CreateOrderForm setGetOrders={setGetOrders} />}

        <GetOrders getOrders={getOrders} setGetOrders={setGetOrders} />
      </div>
    </div>
  );
};

export default Home;
