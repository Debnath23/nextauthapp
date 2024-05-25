import { NextResponse } from "next/server";
import Category from "../../../models/categoryModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export const GET = async () => {
    try {
        const categories = await Category.find({});
        return NextResponse.json(categories , { status: 200 }); 
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}