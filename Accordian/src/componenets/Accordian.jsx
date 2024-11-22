import { useState } from "react";
import faq from "../API/faq.json";
import { useEffect } from "react";
import Faq from "./Faq";

const Accordian = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);
  useEffect(() => {
    setData(faq);
  }, []);
  const toggleAccordion=(id)=>{
    setActiveId((prevId)=>(prevId === id?false:id))
  }
  return (
    <>
      <section className="w-full max-w-lg mx-auto shadow-md rounded-lg overflow-hidden">
        <p className="text-xl font-bold text-center py-4 bg-gray-100 border-b">
          The Accordion
        </p>
        <ul>
          {data.map((curData) => {
            const {id}=curData;
            return (
         <Faq key={id} curData={curData} isActive={activeId===curData.id} onToggle={()=>toggleAccordion(id)}/>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Accordian;
