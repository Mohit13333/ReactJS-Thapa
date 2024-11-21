import React, { useEffect, useState } from "react";
import { postData, updateElemData } from "../Services/PostApi";

const AddForm = ({data,setData,updateData,setUpdateData}) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  let isEmpty=Object.keys(updateData).length===0;

  useEffect(() =>{
    updateData&&setAddData({
        title:updateData.title|| "",
        body:updateData.body ||"",
    })
  },[updateData])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addPostData=async()=>{
  const res= await postData(addData);
  console.log(res)
  if(res.status===201){
    setData([...data,res.data]);
    setAddData({
        title: "",
        body: "",
    })
  }
  }

  const updatePostData=async()=>{
    try {
        const res= await updateElemData(updateData.id,addData);
        console.log(res);
        if(res.status===200){
        setData((prev)=>{
            return prev.map((curData)=>{
                return curData.id===updateData.id ? res.data : curData;
            })
        })
        setAddData({
            title: "",
            body: "",
        })
        setUpdateData({})
    }
    } catch (error) {
        console.error(error)
        
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action=e.nativeEvent.submitter.value;
    if(action==="Add"){
        addPostData();
  }else if(action==="Edit"){
    updatePostData();
  }
  }
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-r from-gray-900 via-green-700 to-cyan-800">
        <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-md">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={addData.title}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            />
            <label htmlFor="body" className="ml-2">
              Body
            </label>
            <input
              type="text"
              name="body"
              placeholder="Body"
              value={addData.body}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:ring-2 hover:scale-125 transition-all ease-in-out duration-500 focus:ring-green-400"
              value={isEmpty?'Add':'Edit'}
            >
             {isEmpty?'Add':'Edit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddForm;
