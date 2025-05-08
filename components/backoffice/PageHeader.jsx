"use client";

import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function PageHeader({ heading, linkTitle, href, disabled, alertMessage }) {
  return (
    <div className="flex justify-between py-4 mb-4">
      <Heading title={heading} />
      {disabled ? (
        // في حالة كان الزر معطلاً، نعرض النص التحذيري
        <div className="text-red-500 font-medium">
          {alertMessage || "لقد تجاوزت الحد المسموح به لإضافة المنتجات."}
        </div>
      ) : (
        // في حالة كان الزر مفعلًا
        <Link
          className="text-white bg-purple-700 
            hover:bg-purple-600/90 focus:ring-4 
            focus:outline-none focus:ring-purple-600/50
            font-medium rounded-lg text-base px-5 py-3
            text-center inline-flex items-center
            dark:focus:ring-purple-600/55 me-2 space-x-3"
          href={href}
        >
          <Plus />
          <span>{linkTitle}</span>
        </Link>
      )}
    </div>
  );
}
