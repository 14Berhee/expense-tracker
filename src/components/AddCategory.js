import PlusSign from "../../public/icons/PlusSign";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AddCategory = () => {
  return (
    <div className="w-[340px] h-[392px] bg-[#FFFFFF] rounded-lg">
      <div>
        <button className="flex items-center gap-3 ml-4 pt-2 ">
          <PlusSign color="#0166FF" width="40px" /> Add Category
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
