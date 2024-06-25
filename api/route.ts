import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
  try{
    console.log(req)
    const form = await req.formData()
    fetch("server",{
      method: "POST",
      body: form
    })
    return new NextResponse()
  }
  catch(e){
    return new NextResponse(undefined,{status: 500}) 
  }
}