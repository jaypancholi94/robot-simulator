import { Bot } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="lg:p-4 p-1 flex gap-1 justify-center lg:justify-start border-b lg:border-none">
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-end">
          <Bot
            className="font-bold lg:mb-[-10px] mb-[-6px] lg:h-6 lg:w-6 h-4 w-4"
            strokeWidth={2}
          />
          <h2 className="font-bold lg:text-lg text-sm">Robot</h2>
        </div>
        <h2 className="font-bold text-xs opacity-60 mt-[-8px] lg:text-sm">
          Simulation
        </h2>
      </div>
    </div>
  );
};
export { Header };
