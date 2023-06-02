import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("user", "");
    router.push("/");
  }, [navigate]);

  return null;
};

export default logout;
