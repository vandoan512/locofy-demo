import { FunctionComponent } from "react";
import ButtonGroupBase from "/";

export type PaginationType = {
  className?: string;
};

const Pagination: FunctionComponent<PaginationType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1120px] bg-base-white overflow-x-auto flex flex-row items-center justify-between p-4 box-border shrink-0 gap-5 max-w-full text-left text-base text-gray-500 font-heading-h6-medium ${className}`}
    >
      <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[31px] gap-1">
        <div className="relative leading-[24px]">Total</div>
        <b className="relative leading-[24px] inline-block text-gray-700 min-w-[30px]">
          100
        </b>
        <div className="relative leading-[24px] inline-block min-w-[38px]">
          result
        </div>
      </div>
      <div className="flex flex-row items-center justify-start flex-wrap content-center gap-0 max-w-[calc(100%_-_320px)] [row-gap:20px] text-sm text-gray-700">
        <ButtonGroupBase
          iconRight={false}
          iconLeft
          propBorderRadius="10px 0px 0px 10px"
          propAlignSelf="unset"
          propFlex="1"
          propBackgroundColor="#fff"
          propBorder="1px solid #d0d5dd"
          propBorderTop="unset"
          propBorderBottom="unset"
          propMinWidth="73px"
          propMinHeight="40px"
          iconEdit="/iconlinearrowleft.svg"
          trailing="Previous"
          propMinWidth1="53px"
          propTextDecoration="unset"
          propColor="#d0d5dd"
          propDisplay="inline-block"
          iconLineArrowRight="pending_I3023:16785;1071:7100;1071:7194"
        />
        <div className="bg-gray-50 border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid flex flex-row items-center justify-center py-2 px-[15px] text-gray-400">
          <div className="relative leading-[20px] font-medium">1</div>
        </div>
        <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid flex flex-row items-center justify-center py-2 px-3.5">
          <div className="relative leading-[20px] font-medium inline-block min-w-[10px]">
            2
          </div>
        </div>
        <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid flex flex-row items-center justify-center py-2 px-3.5">
          <div className="relative leading-[20px] font-medium inline-block min-w-[10px]">
            3
          </div>
        </div>
        <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid flex flex-row items-center justify-center py-2 px-3.5">
          <div className="relative leading-[20px] font-medium inline-block min-w-[10px]">
            4
          </div>
        </div>
        <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid flex flex-row items-center justify-center py-2 px-3.5">
          <div className="relative leading-[20px] font-medium inline-block min-w-[10px]">
            5
          </div>
        </div>
        <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-r-[1px] border-solid border-gray-300 border-b-[1px] border-solid flex flex-row items-center justify-center py-2 px-[13px] text-gray-300">
          <b className="relative leading-[20px] inline-block min-w-[13px]">
            ...
          </b>
        </div>
        <div className="bg-base-white border-gray-300 border-t-[1px] border-solid border-gray-300 border-b-[1px] border-solid flex flex-row items-center justify-center py-2 px-[11px]">
          <div className="relative leading-[20px] font-medium inline-block min-w-[17px]">
            10
          </div>
        </div>
        <ButtonGroupBase
          iconRight
          iconLeft
          iconEdit="pending_I3023:16785;1071:7120;573:2085"
          trailing="Next"
          iconLineArrowRight="/iconlinearrowright-3.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[31px] gap-1 opacity-[0]">
        <div className="relative leading-[24px]">Total</div>
        <b className="relative leading-[24px] inline-block text-gray-700 min-w-[30px]">
          100
        </b>
        <div className="relative leading-[24px] inline-block min-w-[38px]">
          result
        </div>
      </div>
    </div>
  );
};

export default Pagination;
