"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import style from "./authLinks.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { isAuthenticated, userData } = useAuth();

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

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blogging</div>
      <div className={styles.links}>
        {!isAuthenticated ? (
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
            {!isAuthenticated ? (
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
