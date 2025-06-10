import React from "react";

export default function Button({ label, style }) {
  return (
    <button
      className={`border-[#C778DD] text-base hover:border-[#fff] w-[50%] border-[0.1rem] py-[0.5rem] px-[1rem] text-[#fff] hover:text-[#C778DD] ${style}`}
    >
      {label ? label : "Live"}
    </button>
  );
}
