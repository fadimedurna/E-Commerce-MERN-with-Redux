import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { userRequest } from "../requestMethods";
import { resetCart } from "../redux/cartRedux";

const Success = () => {
  //useLocation is used to get the data from the previous page
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart; //cart is the cart from redux
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        console.log("res", res);
        console.log("res.data", res.data);
        console.log("res.data._id", res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  console.log("cart", cart);
  console.log("data", data);
  console.log("orderId", orderId);

  const handleClick = () => {
    dispatch(resetCart({ cart }));
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button
        onClick={handleClick}
        style={{
          padding: 14,
          marginTop: 20,
          border: "none",
          cursor: "pointer",
          backgroundColor: "#B7C4CF",
          borderRadius: 5,
        }}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
