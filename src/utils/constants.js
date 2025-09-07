import { DollarSign, Users, ShoppingCart, Target } from "lucide-react";

export const STAT_CARDS_DATA = [
  {
    title: "Total Revenue",
    value: "$54,239",
    change: 12.5,
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Active Users",
    value: "2,847",
    change: 8.2,
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Orders",
    value: "1,429",
    change: -2.1,
    icon: ShoppingCart,
    color: "bg-purple-500",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: 15.3,
    icon: Target,
    color: "bg-yellow-500",
  },
];
