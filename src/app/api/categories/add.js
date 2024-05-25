import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Category from "../../../models/categoryModel";

connect();

export const POST = async (req) => {
  try {
    const { slug, title, img } = await req.json();

    if (!slug || !title) {
      return NextResponse.json(
        { error: "Slug and title are required" },
        { status: 400 }
      );
    }

    const newCategory = new Category({ slug, title, img });
    await newCategory.save();

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};