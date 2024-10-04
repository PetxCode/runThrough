import { FC, ReactNode } from "react";

interface iProps {
  title?: string;
  color?: boolean;
  icon?: ReactNode;
}

const Button: FC<iProps> = ({ title, color, icon }) => {
  return (
    <div>
      <button
        className={`flex items-center gap-2 px-8 py-2 border rounded-full font-semibold ${
          color && "bg-blue-950 text-white"
        } `}
      >
        {icon}
        {title}
      </button>
    </div>
  );
};

export default Button;
