import Image from "next/image";
import user from "../public/images/user.svg";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`flex justify-center gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={user} alt={title} className="size-5 xl:size-6" />}
      <label className="bold-14 xl:bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button;