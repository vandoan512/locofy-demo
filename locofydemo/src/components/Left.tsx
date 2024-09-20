import { FunctionComponent } from "react";
import TextField from "./TextField";
import Logo from "./Logo";

export type LeftType = {
  className?: string;
};

const Left: FunctionComponent<LeftType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] bg-base-white border-gray-200 border-r-[1px] border-solid box-border w-[280px] h-[1174px] flex flex-col items-start justify-start pt-[68px] px-0 pb-0 gap-5 text-left text-base text-gray-400 font-heading-h6-medium ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-col items-start justify-start pt-3 px-3 pb-2.5 top-[0] z-[99] sticky">
          <TextField
            iconRight
            iconLeft
            hintText="Search"
            iconEyeOpen="pending_I3023:16403;9:2792"
            iconArrowDown="pending_I3023:16403;9:2795"
          />
        </div>
        <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-col items-start justify-start pt-5 px-3 pb-1.5 gap-3 text-sm">
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-[7px]">
            <b className="flex-1 relative leading-[20px]">MAIN MENU</b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-1 text-base text-gray-700">
            <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-3 pl-2 pr-[127px] gap-3">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iconhome.svg"
              />
              <div className="relative leading-[20px] font-medium inline-block min-w-[81px]">
                Home page
              </div>
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-3 pl-2 pr-[130px] gap-3">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iconchartcol.svg"
              />
              <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[78px]">
                Dashboard
              </a>
            </div>
            <div className="self-stretch h-[52px] rounded-xl bg-gray-50 border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 pl-2 pr-[119px] gap-3 text-primary-700">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0"
                alt=""
                src="/iconapp.svg"
              />
              <div className="relative leading-[20px] font-medium inline-block min-w-[87px]">
                Applications
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[486px] pl-3 pr-[11px] text-sm">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-px gap-3">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
            <b className="flex-1 relative leading-[20px]">SALES CHANEL</b>
          </div>
          <div className="self-stretch h-[140px] flex flex-col items-start justify-start gap-1">
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-2.5 px-2">
              <Logo />
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-2.5 px-2">
              <img className="h-6 w-[75px] relative" alt="" src="/logo.svg" />
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-2.5 px-2">
              <img
                className="h-6 w-[82.5px] relative"
                alt=""
                src="/logo-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-3 px-3 pb-5 text-gray-700">
        <div className="self-stretch flex flex-col items-start justify-start gap-1">
          <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-2 pl-2 pr-[161px] gap-3">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iconsetting.svg"
            />
            <div className="relative leading-[20px] font-medium inline-block min-w-[51px]">
              Setting
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-2 pl-2 pr-32 gap-3">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/call-1.svg"
            />
            <div className="relative leading-[20px] font-medium inline-block min-w-[84px]">
              Help Center
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
