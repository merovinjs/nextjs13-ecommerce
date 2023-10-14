
import {prisma} from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import React from "react";

export const metadata ={
  title:'Add-Products '
}

async function addProduct(formdata:FormData){
  "use server"

  const name=formdata.get('name')?.toString();
  const description=formdata.get('description')?.toString()
  const imageUrl=formdata.get('imageUrl')?.toString()
  const price=Number(formdata.get('price') || 0)

if(!name || !description || !imageUrl || !price){
  throw new Error("All fields are required")
  }

  await prisma.products.create({
   data:{
    name,
    description,
    imageUrl,
    price}

})
redirect("/")
}

const AddProducts = () => {
  return <div >
    <h1 className="mb-3 text-lg font-bold">Add Products</h1>
    <form action={addProduct}>
      <input type="text"
      placeholder="Product Name"
      name="name"
      className="input input-bordered mb-3 w-full"
  

      />
    <textarea name="description" id="" 
    className="textarea textarea-bordered mb-3 w-full " ></textarea>
    <input type="url" name="imageUrl" placeholder="Image Url" className="input input-bordered mb-3 w-full" />
    <input name="price" type="number" placeholder="Price" className="input input-bordered mb-3 w-full" />

    <button className="btn btn-primary btn-block" type="submit">Add Product</button>
    </form>
  </div>;
};

export default AddProducts;
