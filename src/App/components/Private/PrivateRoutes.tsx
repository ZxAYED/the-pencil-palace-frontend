// PrivateRoute.tsx
import React, { ReactNode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import { ColorRing } from "react-loader-spinner";

import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";

const PrivateRoute: React.FC<ReactNode> = ({ children }: ReactNode) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user]);
  console.log(user);
  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </Box>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
