import { FunctionComponent } from "react";
import ButtonGroupBase from "./ButtonGroupBase";

export type ButtonGroupType = {
  className?: string;
};

const ButtonGroup: FunctionComponent<ButtonGroupType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-10 flex flex-row items-center justify-start max-w-full text-left text-sm text-gray-700 font-heading-h6-medium ${className}`}
    >
      <ButtonGroupBase
        iconRight
        iconLeft
        iconEdit="/iconoverview.svg"
        trailing="Overview"
        iconLineArrowRight="pending_I3023:16456;581:3326;1071:7166"
      />
      <ButtonGroupBase
        iconRight={false}
        iconLeft
        propBorderRadius="unset"
        propAlignSelf="stretch"
        propFlex="unset"
        propBackgroundColor="#f6f7f9"
        propBorder="unset"
        propBorderTop="1px solid #d0d5dd"
        propBorderBottom="1px solid #d0d5dd"
        propMinWidth="unset"
        propMinHeight="unset"
        iconEdit="/iconrowvertical.svg"
        trailing="List view"
        propMinWidth1="unset"
        propTextDecoration="unset"
        propColor="#98a2b3"
        propDisplay="unset"
        iconLineArrowRight="pending_I3023:16456;581:3327;1071:7201"
      />
      <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid hidden flex-row items-center justify-center py-2 px-[15px]">
        <div className="relative leading-[20px] font-medium">Middle</div>
      </div>
      <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid hidden flex-row items-center justify-center py-2 px-[15px]">
        <div className="relative leading-[20px] font-medium">Middle</div>
      </div>
      <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-b-[1px] border-solid hidden flex-row items-center justify-center py-2 px-4">
        <div className="relative leading-[20px] font-medium">Middle</div>
      </div>
      <ButtonGroupBase
        iconRight={false}
        iconLeft
        propBorderRadius="0px 10px 10px 0px"
        propAlignSelf="stretch"
        propFlex="1"
        propBackgroundColor="#f6f7f9"
        propBorder="1px solid #d0d5dd"
        propBorderTop="unset"
        propBorderBottom="unset"
        propMinWidth="unset"
        propMinHeight="unset"
        iconEdit="/iconcategory.svg"
        trailing="Grid view"
        propMinWidth1="58px"
        propTextDecoration="none"
        propColor="#98a2b3"
        propDisplay="inline-block"
        iconLineArrowRight="pending_I3023:16456;581:3328;1071:7202"
      />
    </div>
  );
};

export default ButtonGroup;