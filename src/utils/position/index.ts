export const generatePositionClassName = ({
  cooardinate,
  val,
}: {
  cooardinate: "x" | "y";
  val: number;
}) => {
  switch (val) {
    case 1:
      return cooardinate === "x" ? "left-[20%]" : "top-[20%]";
    case 2:
      return cooardinate === "x" ? "left-[40%]" : "top-[40%]";
    case 3:
      return cooardinate === "x" ? "left-[60%]" : "top-[60%]";
    case 4:
      return cooardinate === "x" ? "left-[80%]" : "top-[80%]";

    default:
      return cooardinate === "x" ? "left-[0%]" : "top-[0%]";
  }
};
