"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed!");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return <div>
    <h1>{loading ? "Processing" : "Login"}</h1>

    <label htmlFor="email">Email: </label>
    <input
    id="email"
    value={user.email}
    onChange={(e) => setUser({
      ...user, email: e.target.value
    })}
    type="email"
    placeholder="email" />

    <label htmlFor="password">Password: </label>
    <input
    id="password"
    value={user.password}
    onChange={(e) => setUser({
      ...user, password: e.target.value
    })}
    type="password"
    placeholder="password" />

    <button
    onClick={onLogin} 
    type="button">
      {buttonDisabled ? "No login" : "Login"}
    </button>
    <Link href="/signup">Visit signup page</Link>
  </div>;
}
