import { NextResponse } from "next/server";
import Comment from "../../../models/commentModel";
import { connect } from "@/dbConfig/dbConfig";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

connect();

// Get all comments of a post
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await Comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Create a comment
export const POST = async (req) => {
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/aboutme");
      setData(response.data.data._id);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (data === "nothing") {
    return NextResponse.json({message: "Not Authenticated!"}, { status: 401 });
  }
  

  try {
    const body = await req.json();
    const comment = await Comment.create({
        data: {...body, userEmail: data.user.email}
    });

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
