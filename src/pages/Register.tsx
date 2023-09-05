import { useState } from "react";
import { IRegisterResponse } from "../types";
import { BASE_URL, LOGIN_PAGE } from "../constants";
import { useNavigate } from "react-router-dom";

const styles = {
  header: `text-black text-xl font-bold text-center pb-6`,
  subHeader: `text-black text-lg font-semibold text-center pb-10`,
  formContainer: `bg-white shadow-xl p-10 flex flex-col gap-4 text-sm`,
  label: `text-gray-600 font-bold inline-block pb-2`,
  input: `border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2`,
};

const registerUrl = `${BASE_URL}/Authentication/RegisterUser`;
const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");

const Register = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const requestBody = {
    firstname: `${firstname}`,
    lastname: `${lastname}`,
    emailAddress: `${email}`,
    password: `${password}`,
  };

  const fetchOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  };

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(registerUrl, fetchOptions)
      .then((response) => {
        // Parse the response as JSON
        return response.json() as Promise<IRegisterResponse>;
      })
      .then((response) => {
        if(response){
        window.alert("Registration succesfully");
        navigate(`${LOGIN_PAGE}`);
        }
      })
      .catch(() => {
        window.alert("Error while registering");
      });
  };
  return (
    <div className='bg-[#F9FAFB] h-screen w-screen flex items-center'>
      <div className='h-max mx-auto flex flex-col items-center'>
        <h1 className={styles.header}>Demo Commerce</h1>
        <h1 className={styles.subHeader}>Register</h1>
        <form
          className={styles.formContainer}
          onSubmit={(e) => registerUser(e)}
        >
          <div>
            <label className={styles.label} htmlFor='firstName'>
              First Name
            </label>
            <input
              className={styles.input}
              type='text'
              name='firstName'
              placeholder='john'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div>
            <label className={styles.label} htmlFor='lastName'>
              Last Name
            </label>
            <input
              className={styles.input}
              type='text'
              name='lastName'
              placeholder='doe'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div>
            <label className={styles.label} htmlFor='email'>
              Email
            </label>
            <input
              className={styles.input}
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
              className={styles.input}
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
