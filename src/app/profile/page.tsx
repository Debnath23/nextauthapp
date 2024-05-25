"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function page() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [username, setUsername] = useState("null");

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/aboutme");
      setData(response.data.data._id);
      setUsername(response.data.data.username);
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <h2 className="text-slate-300 text-2xl md:text-6xl font-bold text-center mb-8">
        Profile
      </h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>
            <p className="flex justify-center text-slate-200 text-xl md:text-2xl">
              Hi {username}
            </p>
            <p className="flex justify-center text-slate-200 text-xl md:text-sm">
              Your ID: {data}
            </p>
          </Link>
        )}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          onClick={getUserDetails}
          type="button"
        >
          Get user details
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-600 text-white "
          onClick={logout}
          type="button"
        >
          Logout
        </button>
      </div>
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </>
  );
}
