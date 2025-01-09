import Navbar from "../components/Navbar";
import Income from "../components/Income";
import ExpenseLogo from "../../public/icons/ExpenseLogo";
import IncomeLogo from "../../public/icons/IncomeLogo";
import {WhiteLogo} from "@/components/WhiteLogo"
import { Chip } from "../../public/icons/Chip";
import { Chart } from "@/components/BarChart";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F4F6] flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col gap-6 w-full px-[120px]">
        <div className="flex gap-6">
          <div className="w-full rounded-[18px] bg-[#0166FF] flex flex-col justify-between p-8">
            <WhiteLogo/>
            <div className="flex justify-between items-end">
            <div className="w-[108px] h-[56px]">
              <p className="text-[#FFFFFF] opacity-[0.3] font-normal text-[16px]">CASH</p>
              <p className="text-white text-[24px] font-semibold">10.000</p>
            </div>
            <div>
              <Chip/>
            </div>
            </div>
          </div>
          <Income
            color={"#84CC16"}
            title={"Your Income"}
            money={"1,200,000₮"}
            text={"Your Income Amount"}
            description={"32% from last month"}
            icon={<IncomeLogo />}
          />
          <Income
            color={"#0166FF"}
            title={"Your Expense"}
            money={"-1,200,000₮"}
            text={"Your Expense Amount"}
            description={"32% from last month"}
            icon={<ExpenseLogo />}
          />
        </div>
      </div>
      <Chart/>
    </div>
  );
};

export default Dashboard;
