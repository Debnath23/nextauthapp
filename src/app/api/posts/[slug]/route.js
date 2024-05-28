import { NextResponse } from "next/server";
import Post from "../../../models/postModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export const GET = async (req, {params}) => {
    const {slug} = params;

    try {
        const post = await Post.update({
            where: {slug},
            data: {
                views: {
                    increment: 1
                }
            },
            include: { user: true}
        })

        return NextResponse.json(post , { status: 200 }); 
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}