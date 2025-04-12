import { Wallet, Truck, Settings, Globe, Bell, ShoppingCart, Award } from "lucide-react";
import { FC } from "react";
import Link from "next/link";
const SettingCard = ({ href, icon, title, description }) => {
  return (
    <Link
      href={href}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
};

export default SettingCard;
