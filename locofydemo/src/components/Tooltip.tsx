import { FunctionComponent } from "react";

export type TooltipType = {
  className?: string;
};

const Tooltip: FunctionComponent<TooltipType> = ({ className = "" }) => {
  return (
    <div
      className={`!m-[0] absolute top-[88px] left-[7px] shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.03)] rounded-lg bg-gray-900 flex flex-row items-start justify-start py-2 pl-3 pr-[11px] z-[1] text-left text-xs text-base-white font-heading-h6-medium ${className}`}
    >
      <img
        className="h-4 w-4 absolute !m-[0] bottom-[-6px] left-[calc(50%_-_9px)] rounded-sm"
        alt=""
        src="/arrow.svg"
      />
      <div className="relative leading-[16px] font-medium inline-block min-w-[35px]">
        Delete
      </div>
    </div>
  );
};

export default Tooltip;
