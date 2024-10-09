import { categoryIconByCategoryName } from "../util/findCategoryIcon";
import moment from "moment";

const Record = (props) => {
  const { name, image, time, color, amount, iconColor } = props;
  const icon = categoryIconByCategoryName(props);

  const formattedDate = moment(time).format("lll");

  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full bg-[${iconColor}]`}
          style={{
            backgroundColor: iconColor,
          }}
        >
          {icon?.image}
        </div>

        <div className="flex flex-col">
          <p className="font-normal text-base">{name}</p>
          <p className="font-normal text-xs text-[#6B7280]">{formattedDate}</p>
        </div>
      </div>
      <p
        className={`font-semibold text-base text-[${color}]`}
        style={{ text: color }}
      >
        {amount}
      </p>
    </div>
  );
};

export default Record;
