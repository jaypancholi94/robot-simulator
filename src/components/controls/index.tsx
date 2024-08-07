import { BUTTON_ICON_TYPES, DIRECTION_ARRAY } from "../../constants";
import { Info, MapPinned } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { cn } from "../../utils/tailwind-class-merge";

interface ControlsProps {
  direction: (typeof DIRECTION_ARRAY)[number];
  isForwardAllowed: boolean;
  isBackwardAllowed: boolean;
  className?: string;
  position: { x: number; y: number };
  leftOnClick: () => void;
  rightOnClick: () => void;
  forwardOnClick: () => void;
  backwardOnClick: () => void;
}
const Controls: React.FC<ControlsProps> = ({
  direction,
  isForwardAllowed,
  isBackwardAllowed,
  className,
  position,
  leftOnClick,
  rightOnClick,
  forwardOnClick,
  backwardOnClick,
}: ControlsProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="flex gap-2">
        <MapPinned size={20} className="text-gray-600" />
        <span className="capitalize font-bold text-gray-600">
          {direction} x:{position.x + 1}, y: {position.y + 1}
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          icon={BUTTON_ICON_TYPES.LEFT}
          label="Left"
          onClick={leftOnClick}
        />
        <div className="flex gap-2 flex-col">
          <Button
            icon={BUTTON_ICON_TYPES.FORWARD}
            label="Forward"
            disabled={!isForwardAllowed}
            onClick={forwardOnClick}
          />
          <Button
            icon={BUTTON_ICON_TYPES.BACKWARD}
            label="Backward"
            disabled={!isBackwardAllowed}
            onClick={backwardOnClick}
          />
        </div>
        <Button
          icon={BUTTON_ICON_TYPES.RIGHT}
          label="Right"
          onClick={rightOnClick}
        />
      </div>
      <div className="flex items-center gap-1 opacity-70">
        <Info size={16} />
        <p className="">arrow key or vim motion 😎</p>
      </div>
    </div>
  );
};
export { Controls };
