/* eslint-disable no-console */
import { useGetOrderProductByIdQuery } from "@/redux/features/user/userApi";
import { useRouter } from "next/router";

const OrderDetailsPage = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const {
    data: order,
    isLoading,
    isError,
  } = useGetOrderProductByIdQuery(orderId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details for {orderId}</h1>
      <div className="border rounded-lg shadow-md p-4">
        <p>
          <strong>Order ID:</strong> {order.orderId}
        </p>
        <p>
          <strong>Total:</strong> ${order.total.toFixed(2)}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(order.updatedAt).toLocaleDateString()}
        </p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
