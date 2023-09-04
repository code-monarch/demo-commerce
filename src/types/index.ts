export interface IRegisterResponse {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}
export interface ILoginResponse {
  accessToken: string;
}
export interface IGetOrdersResponse {
  orderId: number;
  customerId: number;
  customer: {
    customerId: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    passwordHash: string;
    orders: string[];
    createdAt: string;
  };
  products: {
    itemBarcode: string;
    name: string;
  }[];
  numberOfItemsOrdered: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateOrderPayload {
  items: {
    itemBarcode: string;
    name: string;
  }[];
  quantity: number;
}
export interface IUpdateOrderPayload {
  items: {
    itemBarcode: string;
    name: string;
  }[];
  quantity: number;
  orderId: number;
}
