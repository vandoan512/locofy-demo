import { FunctionComponent } from "react";

export type Col2Type = {
  className?: string;
};

const Col2: FunctionComponent<Col2Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-center text-sm text-success-600 font-heading-h6-medium ${className}`}
    >
      <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-center pt-3 px-[30px] pb-2.5 gap-2 text-left text-gray-500">
        <div className="relative leading-[16px] font-medium inline-block min-w-[41px]">
          Status
        </div>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/iconlinearrowdown.svg"
        />
      </div>
      <div className="self-stretch flex-1 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[39px]">
        <div className="flex-1 rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-success-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Online
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[39px]">
        <div className="flex-1 rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-success-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Online
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[39px]">
        <div className="flex-1 rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-success-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Online
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[39px]">
        <div className="flex-1 rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-success-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Online
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-4 pb-[18px] text-warning-600">
        <div className="flex-1 rounded-981xl bg-warning-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-warning-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Conecting
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-4 pb-[18px] text-warning-600">
        <div className="flex-1 rounded-981xl bg-warning-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-warning-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Conecting
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[17px] text-error-600">
        <div className="flex-1 rounded-981xl bg-error-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-error-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Disconect
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[17px] text-error-600">
        <div className="flex-1 rounded-981xl bg-error-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-error-500" />
          </div>
          <div className="flex-1 relative leading-[20px] font-medium">
            Disconect
          </div>
        </div>
      </div>
      <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-4 pb-[18px] text-gray-600">
        <div className="rounded-981xl bg-gray-100 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-gray-500" />
          </div>
          <div className="relative leading-[20px] font-medium">Offile</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-5 px-4 text-gray-600">
        <div className="rounded-981xl bg-gray-100 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
          <div className="flex flex-row items-center justify-center p-px">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-gray-500" />
          </div>
          <div className="relative leading-[20px] font-medium">Offile</div>
        </div>
      </div>
    </div>
  );
};

export default Col2;
