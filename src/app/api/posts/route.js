import { NextResponse } from "next/server";
import Post from "../../../models/postModel";
import { connect } from "@/dbConfig/dbConfig";
import { useAuth } from "@/providers/AuthProvider";

connect();

// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url);
//   const page = searchParams.get("page");
//   const cat = searchParams.get("cat");
//   const POST_PER_PAGE = 2;

//   const query = {
//     take: POST_PER_PAGE,
//     skip: POST_PER_PAGE * (page - 1),
//     where: {
//       ...(cat && {
//         catSlug: cat,
//       }),
//     },
//   };

//   try {
//     const [posts, count] = await Post.$transaction([
//       Post.findMany(query),
//       Post.count({ where: query.where }),
//     ]);
//     return NextResponse.json({ posts, count }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// };

// export const POST = async (req) => {

//   const { isAuthenticated, userData } = useAuth();

//   if (!isAuthenticated) {
//     return NextResponse.json(
//       { message: "Not Authenticated!" },
//       { status: 401 }
//     );
//   }

//   try {
//     const body = await req.json();
//     const post = await post.create({
//       data: { ...body, userEmail: userData.user.email },
//     });

//     return NextResponse.json(post, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// };

connect();

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page"), 10) || 1;
  const cat = searchParams.get("cat");
  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await Post.$transaction([
      Post.findMany(query),
      Post.count({ where: query.where }),
    ]);
    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const POST = async (req) => {
  const auth = useAuth(req);
  
  if (!auth.isAuthenticated) {
    return NextResponse.json(
      { message: "Not Authenticated!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const post = await Post.create({
      data: { ...body, userEmail: auth.user.email },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
