// app/api/item/delete/[id]/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function DELETE(request,context) {
    const reqBody = await request.json()
    try {
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        if (singleItem.email === reqBody.email) {
            await ItemModel.deleteOne({_id:context.params.id})
            return NextResponse.json({message: "アイテム削除成功"})
        }else{
            return NextResponse.json({message: "あなたには削除できない"})
        }
    }catch(err){
        return NextResponse.json({message:"アイテム削除失敗"})
    }
    
}
