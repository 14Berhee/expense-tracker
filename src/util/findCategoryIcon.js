import FoodExpense from "../../public/icons/FoodExpenseIcon";
import RentIcon from "../../public/icons/RentIcon";
import Shopping from "../../public/icons/Shopping";

const icons = [
  {
    id: 9,
    color: "#23E01F",
    image: <RentIcon />,
    name: "Lending & Renting",
    iconColor: "#0166FF",
  },
  {
    id: 8,
    color: "#F54949",
    image: <FoodExpense />,
    name: "Food and Drinks",
    iconColor: "#FF4545",
  },
  {
    id: 10,
    color: "#F54949",
    image: <Shopping />,
    name: "Shopping",
    iconColor: "#FF4545",
  },
];

export const categoryIconById = (id) => {
  const icon = icons.find((icon) => icon.id === id);
  if (!icon) {
    return {
      id: 9,
      color: "#23E01F",
      image: <RentIcon />,
      name: "Lending & Renting",
      iconColor: "#0166FF",
    };
  }
  return icon;
};
