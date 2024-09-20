import { FunctionComponent } from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[280px] w-[1160px] flex flex-col items-start justify-start max-w-full text-left text-sm text-gray-700 font-heading-h6-medium ${className}`}
    >
      <div className="self-stretch bg-base-white border-gray-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-end pt-3 pb-2.5 pl-[744px] pr-3 max-w-full gap-5">
        <div className="w-[404px] flex flex-row items-center justify-end py-0 pl-5 pr-0 box-border max-w-full">
          <div className="h-11 rounded-xl bg-base-white border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2 px-[9px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/iconmore.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-base-white border-gray-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-3 px-3 pb-2.5 max-w-full gap-5 mq900:flex-wrap">
        <ButtonGroup />
        <div className="w-[406px] flex flex-row items-center justify-start gap-4 max-w-full text-lg mq450:flex-wrap">
          <div className="rounded-3xs bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/iconreload.svg"
            />
          </div>
          <Button
            iconLeft
            iconRight
            iconCart="/iconcalendar.svg"
            buttonCTA="Monthly"
            iconCart1="/iconarrowdown-1.svg"
          />
          <Button
            iconLeft
            iconRight
            propBackground="linear-gradient(13.73deg, #155eef, #528bff)"
            propMinWidth="105px"
            propBackgroundColor="unset"
            propBorder="unset"
            propMinHeight="unset"
            iconCart="/iconcart.svg"
            buttonCTA="Add product"
            propColor="#fff"
            propMinWidth1="98px"
            iconCart1="pending_I3023:16461;290:8778"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
