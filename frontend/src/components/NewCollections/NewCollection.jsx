import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
const NewCollection = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h1 className="text-5xl font-bold">NEW COLLECTIONS</h1>
      <hr className="bg-[#252525] h-[6px] w-[200px] rounded-2xl border-1" />
      <div className="flex px-30 flex-wrap gap-10 mt-10">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
