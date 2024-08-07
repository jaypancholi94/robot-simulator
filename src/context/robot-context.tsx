import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_POSITION, DIRECTION, DIRECTION_ARRAY } from "../constants";

interface RobotContextProps {
  position: { x: number; y: number };
  direction: (typeof DIRECTION_ARRAY)[number];
  isForwardAllowed: boolean;
  isBackwardAllowed: boolean;
  rightOnClick: () => void;
  leftOnClick: () => void;
  moveForward: () => void;
  moveBackward: () => void;
}

const RobotContext = createContext<RobotContextProps | null>(null);

export const RobotProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [direction, setDirection] = useState(DIRECTION.EAST);
  const [isForwardAllowed, setIsForwardAllowed] = useState(true);
  const [isBackwardAllowed, setIsBackwardAllowed] = useState(true);

  const rightOnClick = () => {
    const currentIndex = DIRECTION_ARRAY.indexOf(direction);
    const nextIndex = (currentIndex + 1) % DIRECTION_ARRAY.length;
    setDirection(DIRECTION_ARRAY[nextIndex]);
  };
  const leftOnClick = () => {
    const currentIndex = DIRECTION_ARRAY.indexOf(direction);
    const nextIndex =
      (currentIndex - 1 + DIRECTION_ARRAY.length) % DIRECTION_ARRAY.length;
    setDirection(DIRECTION_ARRAY[nextIndex]);
  };
  const moveForward = () => {
    setPosition((prevPosition) => {
      const newPos = { ...prevPosition };
      if (direction === DIRECTION.NORTH && prevPosition.y > 0) newPos.y--;
      if (direction === DIRECTION.SOUTH && prevPosition.y < 4) newPos.y++;
      if (direction === DIRECTION.WEST && prevPosition.x > 0) newPos.x--;
      if (direction === DIRECTION.EAST && prevPosition.x < 4) newPos.x++;
      return newPos;
    });
  };
  const moveBackward = () => {
    setPosition((prevPosition) => {
      const newPos = { ...prevPosition };
      if (direction === DIRECTION.NORTH && prevPosition.y < 4) newPos.y++;
      if (direction === DIRECTION.SOUTH && prevPosition.y > 0) newPos.y--;
      if (direction === DIRECTION.WEST && prevPosition.x < 4) newPos.x++;
      if (direction === DIRECTION.EAST && prevPosition.x > 0) newPos.x--;
      return newPos;
    });
  };
  //keybidnigns
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "l") rightOnClick();
      if (event.key === "ArrowLeft" || event.key === "h") leftOnClick();
      if (event.key === "ArrowUp" || event.key === "k") moveForward();
      if (event.key === "ArrowDown" || event.key === "j") moveBackward();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, direction]);

  useEffect(() => {
    if (
      (position.y === 0 && direction === DIRECTION.NORTH) ||
      (position.y === 4 && direction === DIRECTION.SOUTH) ||
      (position.x === 0 && direction === DIRECTION.WEST) ||
      (position.x === 4 && direction === DIRECTION.EAST)
    ) {
      setIsForwardAllowed(false);
      return;
    }
    setIsForwardAllowed(true);
    if (
      (position.y === 0 && direction === DIRECTION.SOUTH) ||
      (position.y === 4 && direction === DIRECTION.NORTH) ||
      (position.x === 0 && direction === DIRECTION.EAST) ||
      (position.x === 4 && direction === DIRECTION.WEST)
    ) {
      setIsBackwardAllowed(false);
      return;
    }
    setIsBackwardAllowed(true);
  }, [position, direction]);
  return (
    <RobotContext.Provider
      value={{
        position,
        direction,
        isForwardAllowed,
        isBackwardAllowed,
        rightOnClick,
        leftOnClick,
        moveForward,
        moveBackward,
      }}
    >
      {children}
    </RobotContext.Provider>
  );
};

export const useRobot = () => {
  const context = useContext(RobotContext);
  if (!context) {
    throw new Error("useRobot must be used within RobotProvider");
  }
  return context;
};
