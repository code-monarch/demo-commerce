import { useState } from "react";
import { ILoginResponse } from "../types";
import { setTokenCookie } from "../helpers/session-manager";
import { BASE_URL } from "../constants";

const styles = {
  header: `text-black text-xl font-bold text-center pb-6`,
  subHeader: `text-black text-lg font-semibold text-center pb-10`,
  formContainer: `bg-white shadow-xl p-10 flex flex-col gap-4 text-sm`,
  label: `text-gray-600 font-bold inline-block pb-2`,
  input: `border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2`,
};

const registerUrl = `${BASE_URL}/Authentication/Login`;
const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const requestBody = {
    emailAddress: `${email}`,
    password: `${password}`,
  };

  const fetchOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  };

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    fetch(registerUrl, fetchOptions)
      .then((response) => {
        // Parse the response as JSON
        return response.json() as Promise<ILoginResponse>;
      })
      .then(({ accessToken }) => {
        setTokenCookie(accessToken);
        window.alert("User Logged In succesfully");
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  return (
    <div className='bg-[#F9FAFB] h-screen w-screen flex items-center justify-center'>
      <div className='h-max mx-auto flex flex-col items-center'>
        <h1 className={styles.header}>Demo Commerce</h1>
        <h1 className={styles.subHeader}>Sign in to your account</h1>
        <form className={styles.formContainer} onSubmit={(e) => loginUser(e)}>
          <div>
            <label className={styles.label} htmlFor='email'>
              Email
            </label>
            <input
              className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'
              type='email'
              name='email'
              placeholder='johndoe@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className={styles.label} htmlFor='password'>
              Password
            </label>
            <input
              className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'
              type='password'
              name='password'
              placeholder='******'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 w-full py-2 px-3 text-white rounded-sm'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
