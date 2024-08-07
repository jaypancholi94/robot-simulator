import React from "react";
import { Cell } from "../cell";

interface GridProps {
  size: number;
}
const Grid: React.FC<GridProps> = ({ size = 5 }: GridProps) => {
  return (
    <div className={`flex flex-col gap-1`}>
      {Array.from({ length: size }).map((_, y) => (
        <div className="flex gap-1">
          {Array.from({ length: size }).map((_, x) => (
            <Cell key={`${x}-${y}`} />
          ))}
        </div>
      ))}
    </div>
  );
};
export { Grid };
