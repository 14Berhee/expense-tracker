import PlusSign from "../../public/icons/PlusSign";
import axios from "axios";
import { useState } from "react";

const AddCategory = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const createCategory = async () => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Category/`, {
        categoryid: id,
        name: name,
        description: description,
        category_img: "zurag",
      })
      .then(function (response) {
        setId(response.data.id);
        console.log(response);
        onCloseModal();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-[340px] h-[392px] bg-[#FFFFFF] rounded-lg">
      <div>
        <p className="flex items-center gap-3 ml-4 pt-2 ">
          <PlusSign color="#0166FF" width="40px" /> Add Category
        </p>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="mt-8 flex flex-col">
          <input
            type="text"
            placeholder="Add your category"
            className="py-2 px-4 border border-[#D1D5DB] rounded-lg"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="py-2 px-4 border border-[#D1D5DB] rounded-lg mt-2"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mt-6 text-white">
          <button
            onClick={(event) => createCategory(event.target.value)}
            className="bg-[#016ABC] px-4 py-2 rounded-md  hover:bg-[#B9DFFF]"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
