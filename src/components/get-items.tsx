import React, { FC, useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { IGetItemsResponse, IGetOrdersResponse } from "../types";
import CreateOrderForm from "./create-order-form";

const getItemsUrl = `${BASE_URL}/Items/GetItems`;

const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");

const GetItems = () => {
  const [allItems, setAllItems] = useState<IGetItemsResponse[]>([]);
  const [createOrder, setCreateOrder] = useState<boolean>(false);
  const [barCode, setBarcode] = useState<string>("");
  const [name, setName] = useState<string>("");

  const fetchOptions = {
    method: "GET",
    headers: headers,
  };

  fetch(getItemsUrl, fetchOptions)
    .then((response) => {
      // Parse the response as JSON
      return response.json() as Promise<IGetItemsResponse[]>;
    })
    .then((items) => {
      setAllItems(items);
    })
    .catch((error) => {
      console.error("Fetch error:", error?.detail);
    });

  return (
    <div className='w-full'>
      {allItems?.map((item, idx) => (
        <div key={idx} className='w-full flex items-center gap-x-2'>
          <span className='text-black'>
            {item?.itemBarcode} &nbsp; {item?.name}
          </span>
          <button
            className='bg-red-500 textx-white px-2 py-1 rounded-sm'
            onClick={() => {
              setBarcode(item?.itemBarcode);
              setName(item?.name);
              setCreateOrder(true);
            }}
          >
            Order this Item
          </button>
        </div>
      ))}
      {createOrder && <CreateOrderForm name={name} barCode={barCode} />}
    </div>
  );
};

export default GetItems;
