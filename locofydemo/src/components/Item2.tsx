import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Badge from "./Badge";

export type Item2Type = {
  className?: string;
  label?: string;
  label1?: string;
  label2?: string;
  label3?: string;
  propBackgroundColor?: string;
  propBackgroundColor1?: string;
  propBackgroundColor2?: string;
  propBackgroundColor3?: string;
  propFlex?: string;
  propFlex1?: string;
  propFlex2?: string;
  propFlex3?: string;
  propColor?: string;
  propColor1?: string;
  propColor2?: string;
  propColor3?: string;
  propMinWidth?: string;
  propMinWidth1?: string;
  propMinWidth2?: string;
  propMinWidth3?: string;
  propFlex11?: string;
  propFlex12?: string;
  propFlex13?: string;
  propFlex14?: string;
  propDisplay?: string;
  propDisplay1?: string;
  propDisplay2?: string;
  propDisplay3?: string;

  /** Style props */
  propBorderBottom?: CSSProperties["borderBottom"];
  propOverflowX?: CSSProperties["overflowX"];
};

const Item2: FunctionComponent<Item2Type> = ({
  className = "",
  propBorderBottom,
  propOverflowX,
  label,
  label1,
  label2,
  label3,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  propFlex,
  propFlex1,
  propFlex2,
  propFlex3,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propFlex11,
  propFlex12,
  propFlex13,
  propFlex14,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
}) => {
  const item2Style: CSSProperties = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
      overflowX: propOverflowX,
    };
  }, [propBorderBottom, propOverflowX]);

  return (
    <div
      className={`self-stretch border-gray-200 border-b-[1px] border-solid overflow-x-auto flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[53px] gap-2 ${className}`}
      style={item2Style}
    >
      <Badge
        propBackgroundColor={propBackgroundColor}
        propFlex={propFlex}
        label={label}
        propColor={propColor}
        propMinWidth={propMinWidth}
        propFlex1={propFlex11}
        propDisplay={propDisplay}
      />
      <Badge
        propBackgroundColor={propBackgroundColor1}
        propFlex={propFlex1}
        label={label1}
        propColor={propColor1}
        propMinWidth={propMinWidth1}
        propFlex1={propFlex12}
        propDisplay={propDisplay1}
      />
      <Badge
        propBackgroundColor={propBackgroundColor2}
        propFlex={propFlex2}
        label={label2}
        propColor={propColor2}
        propMinWidth={propMinWidth2}
        propFlex1={propFlex13}
        propDisplay={propDisplay2}
      />
      <Badge
        propBackgroundColor={propBackgroundColor3}
        propFlex={propFlex3}
        label={label3}
        propColor={propColor3}
        propMinWidth={propMinWidth3}
        propFlex1={propFlex14}
        propDisplay={propDisplay3}
      />
    </div>
  );
};

export default Item2;
