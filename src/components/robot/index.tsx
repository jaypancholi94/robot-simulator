import { DIRECTION, DIRECTION_ARRAY } from "../../constants";
import { cn } from "../../utils/tailwind-class-merge";
import { ChevronRight } from "lucide-react";
import React from "react";

interface RobotProps {
  direction: (typeof DIRECTION_ARRAY)[number];
  className?: string;
}
const Robot: React.FC<RobotProps> = ({ direction, className }: RobotProps) => {
  return (
    <div
      className={cn(
        "relative transition origin-center",
        direction === DIRECTION.EAST && "rotate-0",
        direction === DIRECTION.SOUTH && "rotate-90",
        direction === DIRECTION.WEST && "scale-x-[-1]",
        direction === DIRECTION.NORTH && "rotate-270",
        className,
      )}
    >
      <div className={cn("relative h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16")}>
        {/* head */}
        <div className=" absolute w-3/5 h-1/3 bg-white border-2 border-gray-400 rounded-t-full left-1/2 transform -translate-x-1/2 top-[-30%] z-10">
          {/* eye */}
          <div className="absolute bg-gray-700 w-[30%] h-[30%] rounded-full left-2/3 transform -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
        </div>
        {/* body */}
        <div className="h-full w-full bg-white border-2 border-gray-400 rounded-full animate-robot-spin">
          <div className="absolute w-1/3 h-1/3 bg-orange-500 border-2 border-gray-400 rounded-full left-1/2 transform -translate-x-1/2 top-1/2"></div>
          <div className="absolute w-1/5 h-1/5 bg-orange-500 border-2 border-gray-400 rounded-full left-1/4 top-1"></div>
        </div>
      </div>
      <ChevronRight
        strokeWidth={3}
        className=" animate-bounce text-primary absolute right-[-50%] top-1/4 transform -translate-y-1 h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8"
      />
    </div>
  );
};
export { Robot };
