import React, { useEffect, useState } from "react";


const categories =["choose a genre" ,"Business" ,"Fiction","Horror","Adventure"];


const TopSeller = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // console.log(books);

  const fliteredBooks = selectedCategory ==="choose a genre"?books : books.filter(book=> book.category===selectedCategory.toLowerCase())
  console.log(fliteredBooks);
  

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      <div className="md-8 flex items-center">
        <select 
        onChange={(e)=>setSelectedCategory(e.target.value)}
        name="category" id="category" className=" border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline">
          {
            categories.map((data,index)=>(
             <option key={index} value={data}>{data}</option>
            ))
          }
        </select>
      </div>

      {
        
      }


    </div>
  );
};

export default TopSeller;
