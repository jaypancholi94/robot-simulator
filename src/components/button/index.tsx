import { BUTTON_ICON_TYPES } from "../../constants";
import { RotateCcw, RotateCw, StepBack, StepForward } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: (typeof BUTTON_ICON_TYPES)[keyof typeof BUTTON_ICON_TYPES];
}
const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  ...props
}: ButtonProps) => {
  const getIcon = () => {
    if (!icon) return null;
    if (icon === BUTTON_ICON_TYPES.LEFT) {
      return <RotateCcw size={16} />;
    }
    if (icon === BUTTON_ICON_TYPES.RIGHT) {
      return <RotateCw size={16} />;
    }
    if (icon === BUTTON_ICON_TYPES.FORWARD) {
      return <StepForward size={16} />;
    }
    if (icon === BUTTON_ICON_TYPES.BACKWARD) {
      return <StepBack size={16} />;
    }
  };
  return (
    <button
      className="flex items-center gap-1 uppercase bg-primary text-center font-bold cursor-pointer tracking-wide text-white px-4 py-2 rounded shadow-button transition hover:shadow-button-hover hover:bg-[#c75724] disabled:opacity-80 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:shadow-none disabled:bg-[#d7d7d7]"
      {...props}
    >
      {getIcon()}
      {label}
    </button>
  );
};
export { Button };
