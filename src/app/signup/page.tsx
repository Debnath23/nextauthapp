"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed!");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return <div>
    <h1>{loading ? "Processing" : "Signup"}</h1>

    <label htmlFor="username">Username: </label>
    <input
    id="username"
    value={user.username}
    onChange={(e) => setUser({
      ...user, username: e.target.value
    })}
    type="text"
    placeholder="username" />

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
    onClick={onSignup} 
    type="button">
      {buttonDisabled ? "No signup" : "Signup"}
    </button>
    <Link href="/login">Visit login page</Link>
  </div>;
}
