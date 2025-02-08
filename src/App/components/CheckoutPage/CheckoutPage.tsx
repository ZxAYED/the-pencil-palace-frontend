import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useRegisterPaymentMutation } from "@/store/services/paymentApi";

const CheckoutPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    address: "",
    amount: 0,
  });

  const [registerPayment] = useRegisterPaymentMutation();

  const handleInputChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      const response = await registerPayment(orderDetails).unwrap();
      if (response.success) {
        window.location.href = response.paymentUrl; // Redirect to Surjo Pay
      } else {
        alert("Payment initiation failed");
      }
    } catch (error) {
      console.error("Payment error: ", error);
    }
  };

  return (
    <div className="p-6 bg-soft-cream min-h-screen">
      <Card className="max-w-lg mx-auto">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Checkout</h1>
          <div className="mb-2">
            <Input
              placeholder="Full Name"
              name="name"
              value={orderDetails.name}
              onChange={handleInputChange}
              className="w-full mb-2"
            />
            <Input
              placeholder="Email"
              name="email"
              type="email"
              value={orderDetails.email}
              onChange={handleInputChange}
              className="w-full mb-2"
            />
            <Input
              placeholder="Address"
              name="address"
              value={orderDetails.address}
              onChange={handleInputChange}
              className="w-full mb-2"
            />
            <Input
              placeholder="Amount"
              name="amount"
              type="number"
              value={orderDetails.amount}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <Button className="w-full mt-4 bg-coral-pink" onClick={handlePayment}>
            Proceed to Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
