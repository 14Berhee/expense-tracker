import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import MyCategories from "@/components/Category";
import PlusSign from "../../public/icons/PlusSign";
import OneRecord from "../components/OneRecord";
import { FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import AddRecord from "@/components/AddRecord";
import axios from "axios";

const categories = [
  "Food & Drinks",
  "Lending & Renting",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

let checked = [
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
];
const Home = (props) => {
  const {} = props;

  const [records, setRecords] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [recordsTypeFilter, setRecordsTypeFilter] = useState("");

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8090/record")
      .then((response) => {
        setRecords(response.data.record);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const filteredRecords = records.filter((record) => {
    if (!recordsTypeFilter) return true;

    return record.transactiontype === recordsTypeFilter;
  });

  const handleRecordFilterType = (type) => {
    setRecordsTypeFilter(type);
  };

  return (
    <div>
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord onCloseModal={handleAdd} />
        </div>
      )}
      <div className={`bg-[#F3F4F6] flex flex-col gap-8 items-center relative`}>
        <Navbar />

        <div className="flex gap-6">
          <div className="bg-white flex flex-col px-6 py-4 w-[282px] gap-6 rounded-xl h-fit border border-[#E5E7EB]">
            <div className="flex flex-col gap-6">
              <p> Records </p>
              <button
                onClick={() => handleAdd()}
                className="flex gap-1 w-[225px] bg-[#0166FF] rounded-3xl text-white items-center justify-center"
              >
                <PlusSign color="white" /> Add
              </button>
            </div>
            <input
              placeholder="Search"
              className="border border-[#D1D5DB] rounded-lg px-4 py-1"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base text-[#1F2937] mb-3">
                Types
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={recordsTypeFilter === ""}
                  className="checkbox"
                  onClick={() => handleRecordFilterType("")}
                />
                All
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={recordsTypeFilter === "INC"}
                  className="checkbox"
                  onClick={() => handleRecordFilterType("INC")}
                />
                Income
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  checked={recordsTypeFilter === "EXP"}
                  type="checkbox"
                  className="checkbox"
                  onClick={() => handleRecordFilterType("EXP")}
                />
                Expense
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-semibold text-base">Category</p>
                <p className="font-normal text-base opacity-20"> Clear </p>
              </div>
              <div className="flex flex-col gap-2">
                {categories.map((category1, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleCategory(selectedEyes[index], index)}
                    >
                      <MyCategories categoryName={category1} />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 py-1.5 pl-3 items-center">
                <PlusSign color={"#0166FF"} />
                <p>Add category </p>
              </div>
            </div>
          </div>
          <div className="w-[894px] flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <FaChevronLeft />
                </div>
                <p className="font-normal text-base"> Last 30 Days</p>
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <FaAngleRight />
                </div>
              </div>
              <select className="w-[180px] py-3 px-4 rounded-lg font-semibold text-base text-[#1F2937] border border-[#D1D5DB]">
                <option selected>Newest First</option>
                <option> Latest First </option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 mb-3">
                {filteredRecords?.map((recordToday, index) => {
                  return (
                    <OneRecord
                      key={index}
                      name={recordToday.name}
                      image={recordToday.image}
                      amount={recordToday.amount}
                      time={recordToday.createdat}
                      color={recordToday.color}
                      iconColor={recordToday.iconColor}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
