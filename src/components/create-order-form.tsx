import React, { FC, useState } from "react";
import { BASE_URL } from "../constants";

const styles = {
  formContainer: `bg-white w-[300px] flex flex-col gap-4 text-sm p-10 shadow-xl`,
  label: `text-gray-600 font-bold inline-block pb-2`,
  input: `border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2`,
};

const createOrderUrl = `${BASE_URL}/Order/CreateOrder`;
const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");

interface IProps {
  setGetOrders: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateOrderForm:FC<IProps> = ({ setGetOrders }) => {
  const [barCode, setBarcode] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>();

  const requestBody = {
    items: [
      {
        itemBarcode: `${barCode}`,
        name: `${name}`,
      },
    ],
    quantity: Number(quantity),
  };

  const fetchOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  };

  const createOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(createOrderUrl, fetchOptions)
      .then((response) => {
        // Parse the response as JSON
        return response.json() as Promise<any>;
      })
      .then(() => {
        window.alert("Order Created");
        setGetOrders(true)
      })
      .catch((error) => {
        console.error("Fetch error:", error?.detail);
      });
  };

  return (
    <form className={styles.formContainer} onSubmit={(e) => createOrder(e)}>
      <div>
        <label className={styles.label} htmlFor='barCode'>
          Bar code
        </label>
        <input
          className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'
          type='text'
          name='barCode'
          placeholder='jhjhjdjhdwhd'
          value={barCode}
          onChange={(e) => setBarcode(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor='name'>
          Name
        </label>
        <input
          className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'
          type='text'
          name='name'
          placeholder='johndoe@gmail.com'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor='quantity'>
          Quantity
        </label>
        <input
          className='border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2'
          type='number'
          name='quantity'
          placeholder='12'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button
        type='submit'
        className='bg-blue-600 w-full py-2 px-3 text-white rounded-sm'
      >
        Create an Order
      </button>
    </form>
  );
};

export default CreateOrderForm;
