type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  // icon?: string;
  variant: string;
  extraStyles?: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full, extraStyles }: ButtonProps) => {
  return (
    <button
    className={`flex justify-center items-center gap-3 rounded-full border ${extraStyles} ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon}
      <label className="bold-14 xl:bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button;