"use client";

import Link from "next/link";
import { useState } from "react";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: any;
  style?: string;
  full?: boolean;
  color: string;
  onClick?: any;
  href?: any;
}

const Button = ({ type, title, icon, full, style, color, onClick, href }: ButtonProps) => {

  const [isMouseOnBtn, setIsMouseOnBtn] = useState<boolean>(false);

  return (
    <Link href={`${href}`} className={`${isMouseOnBtn && 'btn_hover'} w-full sm:size-fit mx-auto md:mx-0 flex justify-center items-center gap-3 rounded-full`}
      onMouseOver={() => { setIsMouseOnBtn(true) }}
      onMouseOut={() => { setIsMouseOnBtn(false) }}>
      <button
        className={`w-full md:w-fit transition-all duration-1000 flex justify-center items-center gap-3 rounded-full border ${style} ${color} ${color === "green" ? (!isMouseOnBtn ? 'btn_green' : 'btn_green_hover') : (!isMouseOnBtn ? 'btn_white_text' : 'btn_white_text_hover')} ${!isMouseOnBtn && 'btn-shadow'} ${full && 'w-full'}`}
        type={type}
        onClick={onClick}
      >
        {icon}
        <label className="bold-14 xl:bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </button>
    </Link>
  )
}

export default Button;