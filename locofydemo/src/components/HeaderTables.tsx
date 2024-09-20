import { FunctionComponent } from "react";
import Badge from "./Badge";
import TextField from "./TextField";

export type HeaderTablesType = {
  className?: string;
};

const HeaderTables: FunctionComponent<HeaderTablesType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-center justify-start p-4 box-border relative gap-4 max-w-full text-left text-lg text-gray-800 font-heading-h6-medium mq900:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[460px] max-w-full mq700:min-w-full">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[499px] gap-2 mq900:flex-wrap">
          <b className="relative leading-[24px] inline-block min-w-[127px]">
            Team members
          </b>
          <Badge label="100 user" />
        </div>
        <div className="self-stretch relative text-sm leading-[20px] text-gray-500">
          Manage your team members and their account permissions here.
        </div>
      </div>
      <TextField
        iconRight
        iconLeft
        propWidth="320px"
        propAlignSelf="unset"
        propHeight="unset"
        hintText="Search member name"
        propTextDecoration="unset"
        iconEyeOpen="pending_I3023:16535;9:2792"
        propGap="2px"
        propPadding="unset"
        iconArrowDown="pending_I3023:16535;9:2795"
      />
      <div className="rounded-xl bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/iconfilter.svg"
        />
      </div>
      <div className="w-[59px] !m-[0] absolute bottom-[-4px] left-[441px] shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.03)] rounded-lg bg-gray-900 flex flex-row items-start justify-start py-2 px-3 box-border z-[2] text-xs text-base-white">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="h-4 w-4 absolute !m-[0] bottom-[-14px] left-[9px] rounded-sm"
            alt=""
            src="/arrow.svg"
          />
          <div className="relative leading-[16px] font-medium">Tooltip</div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTables;
