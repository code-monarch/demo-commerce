import React, { FC, useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { IGetOrdersResponse } from "../types";
import { getTokenCookie } from "../helpers/session-manager";

const getOrderUrl = `${BASE_URL}/Order/GetOrders`;
const authToken = getTokenCookie();

const headers = new Headers();
headers.append("Content-Type", "application/json; charset=UTF-8");
headers.append("Authorization", `Bearer ${authToken ?? ""}`);

interface IProps {
  getOrders: boolean;
  setGetOrders: React.Dispatch<React.SetStateAction<boolean>>;
}

const GetOrders: FC<IProps> = ({ getOrders, setGetOrders }) => {
  const [allOrders, setAllOrders] = useState<IGetOrdersResponse[]>([]);

  const fetchOptions = {
    method: "GET",
    headers: headers,
  };
  const deleteFetchOptions = {
    method: "DELETE",
    headers: headers,
  };

  const handleGetOrders = () => {
    fetch(getOrderUrl, fetchOptions)
      .then((response) => {
        // Parse the response as JSON
        return response.json() as Promise<IGetOrdersResponse[]>;
      })
      .then((orders) => {
        setAllOrders(orders);
        window.alert("Order Created");
      })
      .catch((error) => {
        console.error("Fetch error:", error?.detail);
      });
  };

  useEffect(() => {
    if (getOrders) {
      handleGetOrders();
      setGetOrders(false);
    }
  }, [getOrders]);

  const deleteOrder = (orderId: number) => {
    fetch(
      `${BASE_URL}/Order/DeleteOrder?orderId=${orderId}`,
      deleteFetchOptions
    )
      .then(() => {
        handleGetOrders();
        // Parse the response as JSON
        window.alert("Order Deleted");
      })
      .catch((error) => {
        console.error("Fetch error:", error?.detail);
      });
  };

  return (
    <div className='w-full'>
      {allOrders?.map((order, idx) => (
        <div key={idx} className='w-full flex items-center gap-x-2'>
          <span className="text-black" >
            {order?.customer?.firstName} &nbsp;
            {order?.customer?.lastName}
          </span>
          <div>
            {order?.products?.map((product, idx) => (
              <span key={idx}>{product?.name}</span>
            ))}
          </div>
          <button
            className='bg-red-500 textx-white px-2 py-1 rounded-sm'
            onClick={() => {
              deleteOrder(order?.orderId);
            }}
          >
            Delete order
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetOrders;
