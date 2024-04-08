"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const router = useRouter()
  const [data, setData] = useState("nothing")

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/aboutme")
      console.log(response.data.data._id);
      setData(response.data.data._id)
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const logout = async () => {
    try {
      axios.get("/api/users/logout")
      toast.success("Logout success")
      router.push("/login")
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}><p>ID: {data}</p></Link>}</h2>
      <button onClick={logout} type="button">Logout</button>
      
      <button onClick={getUserDetails} type="button">Get user details</button>
      
    </div>
  )
}