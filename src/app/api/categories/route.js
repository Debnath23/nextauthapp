import { NextResponse } from "next/server";
import Category from "../../../models/categoryModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page");
    const POST_PER_PAGE = 2;
    try {
        const categories = await Category.find({
            take: POST_PER_PAGE,
            skip: POST_PER_PAGE * (page - 1),
        });
        return NextResponse.json(categories , { status: 200 }); 
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}