// PrivateRoute.tsx
import React, { ReactNode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import { Navigate } from "react-router-dom";
import LoadingAnimation from "../../utils/LoadingAnimation";

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
    return <LoadingAnimation />;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
