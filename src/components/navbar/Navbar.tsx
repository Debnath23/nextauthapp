"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import style from "./authLinks.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [open, setOpen] = useState(false);

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/aboutme");
      setData(response.data.data._id);
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
    <div className={styles.container}>
      <div className={styles.logo}>Blogging</div>
      <div className={styles.links}>
        {data === "nothing" ? (
          <div></div>
        ) : (
          <>
            <Link
              href="/"
              className={`styles.link hover:bg-slate-200 hover:text-black rounded-3xl px-4 py-2`}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className={`styles.link hover:bg-slate-200 hover:text-black rounded-3xl px-4 py-2`}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className={`styles.link hover:bg-slate-200 hover:text-black rounded-3xl px-4 py-2`}
            >
              About
            </Link>
            <Link
              href="/write"
              className={`styles.link hover:bg-slate-200 hover:text-black rounded-3xl px-4 py-2`}
            >
              Write
            </Link>
            <span
              className={`styles.link hover:bg-slate-200 hover:text-black rounded-3xl px-4 py-2 mr-4`}
              onClick={logout}
            >
              Logout
            </span>
            <ThemeToggle />
          </>
        )}

        <div className={style.burger} onClick={() => setOpen(!open)}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
        {open && (
          <div className={style.responsiveMenu}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {data === "nothing" ? (
              <Link href="/login">Login</Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span className={style.link} onClick={logout}>
                  Logout
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
