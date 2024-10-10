"use client";
import Link from "next/link";
import { useState } from "react";

type ButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  icon?: any;
  style?: string;
  py?: string;
  px?: string;
  textSize?: string;
  color: string;
  onClick?: () => void;
  href?: string;
};

const Button = ({ type, title, icon, style, color, onClick, href, py, px, textSize }: ButtonProps) => {
  const [isMouseOnBtn, setIsMouseOnBtn] = useState<boolean>(false);

  const buttonClasses = `w-full md:w-fit transition-all duration-1000 flex justify-center items-center gap-3 rounded-full border ${style} ${color} 
    ${color === "green" ? (!isMouseOnBtn ? 'btn_green' : 'btn_green_hover') : (!isMouseOnBtn ? 'btn_white_text' : 'btn_white_text_hover')} 
    ${!isMouseOnBtn && 'btn-shadow'} ${!py ? 'py-5' : py} ${!px ? 'px-8' : px}`;

  return (
    type === 'submit' ? <Link href={href || '#'} className={`flex w-full md:w-fit mx-auto md:mx-0 ${isMouseOnBtn && 'btn_hover'}`} onMouseOver={() => setIsMouseOnBtn(true)} onMouseOut={() => setIsMouseOnBtn(false)}>
      <button
        className={buttonClasses}
        type={type}
        onClick={onClick}
      >
        {icon}
        <label className={`${!textSize ? 'bold-14 xl:bold-16' : textSize} whitespace-nowrap cursor-pointer`}>{title}</label>
      </button>
    </Link> : 
      <div className={`flex w-full md:w-fit mx-auto md:mx-0 ${isMouseOnBtn && 'btn_hover'}`} onMouseOver={() => setIsMouseOnBtn(true)} onMouseOut={() => setIsMouseOnBtn(false)}>
        <button
          className={buttonClasses}
          type={type}
          onClick={onClick}
        >
          {icon}
          <label className={`bold-14 xl:bold-16 whitespace-nowrap cursor-pointer`}>{title}</label>
        </button>
      </div>
  );
};

export default Button;
