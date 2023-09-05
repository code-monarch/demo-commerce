import { useNavigate } from "react-router";
import { LOGIN_PAGE, REGISTER_PAGE } from "../constants";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#F9FAFB] h-screen w-screen flex items-center justify-center'>
      <div className=' w-full h-[300px] flex items-center gap-x-4 mx-auto'>
        <button
          className='bg-gray-600 w-full py-2 px-3 text-white rounded-sm'
          onClick={() => navigate(`${REGISTER_PAGE}`)}
        >
          Register
        </button>
        <button
          className='bg-blue-600 w-full py-2 px-3 text-white rounded-sm'
          onClick={() => navigate(`${LOGIN_PAGE}`)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
