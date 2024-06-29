import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Rentools.pro</h1>
      <p className="text-lg text-center">
        Your one-stop solution for renting tools and equipment. Schedule, reserve, and pay for rentals with ease.
      </p>
      <div className="flex space-x-4">
        <Link to="/schedule">
          <Button variant="outline">Schedule Rental</Button>
        </Link>
        <Link to="/reserve">
          <Button variant="outline">Reserve Tool</Button>
        </Link>
        <Link to="/pay">
          <Button variant="outline">Pay for Rental</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;