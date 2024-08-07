import { Grid } from "../grid";
import React from "react";
import { Controls } from "../controls";
import { Header } from "../header";
import { GRID_SIZE } from "../../constants";
import { useRobot } from "../../context/robot-context";
import { Robot } from "../robot";
import { cn } from "../../utils/tailwind-class-merge";
import { generatePositionClassName } from "../../utils/position";

export const Layout: React.FC = () => {
  const {
    direction,
    position,
    rightOnClick,
    leftOnClick,
    moveForward,
    moveBackward,
    isForwardAllowed,
    isBackwardAllowed,
  } = useRobot();
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex justify-center relative mt-8">
          <div className="relative">
            <Grid size={GRID_SIZE} />
            <Robot
              direction={direction}
              className={cn(
                "absolute transition-all duration-300",
                generatePositionClassName({
                  cooardinate: "x",
                  val: position.x,
                }),
                generatePositionClassName({
                  cooardinate: "y",
                  val: position.y,
                }),
                "transform lg:translate-x-8 lg:translate-y-8 md:translate-x-6 md:translate-y-6 translate-x-4 translate-y-4",
              )}
            />
          </div>
        </div>
        <Controls
          direction={direction}
          position={position}
          className="mt-4"
          leftOnClick={leftOnClick}
          rightOnClick={rightOnClick}
          forwardOnClick={moveForward}
          backwardOnClick={moveBackward}
          isForwardAllowed={isForwardAllowed}
          isBackwardAllowed={isBackwardAllowed}
        />
      </div>
    </>
  );
};
