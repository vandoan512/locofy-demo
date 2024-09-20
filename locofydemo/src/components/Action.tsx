import { FunctionComponent } from "react";
import Tooltip from "./Tooltip";

export type ActionType = {
  className?: string;
};

const Action: FunctionComponent<ActionType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[684px] !m-[0] absolute top-[0px] right-[0px] shadow-[0px_20px_24px_-4px_rgba(0,_0,_0,_0.08),_0px_8px_8px_-4px_rgba(0,_0,_0,_0.03)] bg-base-white flex flex-col items-start justify-start z-[1] text-left text-sm text-gray-500 font-heading-h6-medium ${className}`}
    >
      <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-center pt-3.5 px-9 pb-3">
        <div className="relative leading-[16px] font-medium inline-block min-w-[40px]">
          Action
        </div>
      </div>
      <div className="flex-1 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconedit.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-6 pb-[18px] gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-start py-5 px-6 gap-4">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icondelete.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconedit-1.svg"
        />
      </div>
      <Tooltip />
      <div className="h-8 !m-[0] absolute top-[136px] left-[25px] [filter:drop-shadow(0px_5.3px_10.7px_rgba(0,_0,_0,_0.1))_drop-shadow(0px_2.7px_5.3px_rgba(0,_0,_0,_0.06))] flex flex-col items-center justify-start z-[1]">
        <img
          className="w-8 h-8 relative object-cover"
          loading="lazy"
          alt=""
          src="/cursor@2x.png"
        />
      </div>
    </div>
  );
};

export default Action;
