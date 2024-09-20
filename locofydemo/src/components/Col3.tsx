import { FunctionComponent } from "react";

export type Col3Type = {
  className?: string;
};

const Col3: FunctionComponent<Col3Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-sm text-gray-600 font-heading-h6-medium ${className}`}
    >
      <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-3 pb-2.5 pl-4 pr-[108px] gap-2 text-gray-500">
        <div className="relative leading-[16px] font-medium inline-block min-w-[28px]">
          Role
        </div>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/iconhelp.svg"
        />
      </div>
      <div className="self-stretch flex-1 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px] inline-block min-w-[116px]">
          Fullstack Developer
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px] inline-block min-w-[103px]">
          Product Designer
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px]">UI/UX Designer</div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px] inline-block min-w-[78px]">
          UX Research
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px] inline-block min-w-[116px]">
          Backend Developer
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px] inline-block min-w-[60px]">
          QC Tester
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px] inline-block min-w-[117px]">
          Frontend Developer
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-[15px] pb-5">
        <div className="relative leading-[20px]">UX Writing</div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
        <div className="relative leading-[20px] inline-block min-w-[75px]">
          QA Engineer
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-[22px] px-4">
        <div className="relative leading-[20px] inline-block min-w-[116px]">
          Backend Developer
        </div>
      </div>
    </div>
  );
};

export default Col3;
