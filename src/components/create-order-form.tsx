import React, { FC, useState } from "react";
import { BASE_URL } from "../constants";
import { getTokenCookie } from "../helpers/session-manager";

const styles = {
  formContainer: `bg-white w-[300px] flex flex-col gap-4 text-sm p-10 shadow-xl`,
  label: `text-gray-600 font-bold inline-block pb-2`,
  input: `bg-white border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2`,
};

const createOrderUrl = `${BASE_URL}/Order/CreateOrder`;
const authToken = getTokenCookie();

const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");
headers.append("Authorization", `Bearer ${authToken ?? ""}`);

interface IProps {
  name: string;
  barCode: string;
}

const CreateOrderForm: FC<IProps> = ({name, barCode }) => {
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
      })
      .catch((error) => {
        console.error("Fetch error:", error?.detail);
      });
  };

  return (
    <form className={styles.formContainer} onSubmit={(e) => createOrder(e)}>
      <div>
        <label className={styles.label} htmlFor='quantity'>
          Quantity
        </label>
        <input
          className={styles.input}
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
