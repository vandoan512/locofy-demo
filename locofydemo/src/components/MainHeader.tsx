import { FunctionComponent } from "react";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] w-[1368px] flex flex-row items-start justify-between max-w-full gap-5 text-left text-5xl text-gray-800 font-heading-h6-medium mq900:flex-wrap ${className}`}
    >
      <div className="h-[68px] w-[415px] flex flex-row items-start justify-start gap-3 max-w-full">
        <div className="self-stretch w-[280px] border-gray-200 border-b-[1px] border-solid box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-3.5 px-4 pb-3 gap-[106px]">
          <div className="h-10 w-[118px] shrink-0 flex flex-col items-start justify-start bg-[url('/public/img1@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/img1@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <img className="w-6 h-6 relative" alt="" src="/iccollapse.svg" />
          </div>
        </div>
        <div className="w-[143px] flex flex-col items-start justify-start pt-[19px] pb-0 pl-0 pr-5 box-border">
          <a className="[text-decoration:none] relative tracking-[0.01em] leading-[30px] font-bold text-[inherit] inline-block min-w-[124px] mq450:text-lgi mq450:leading-[24px]">
            Dashboard
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full text-base text-gray-700">
        <div className="h-11 flex flex-row items-start justify-start gap-4">
          <div className="rounded-xl bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/iconsetting.svg"
            />
          </div>
          <div className="rounded-xl bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/iconfolder.svg"
            />
          </div>
          <img className="h-11 w-px relative" alt="" src="/line.svg" />
          <div className="self-stretch rounded-xl bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-start justify-start py-1.5 px-[7px] gap-3">
            <div className="w-[132px] flex flex-row items-start justify-start gap-2">
              <div className="rounded-981xl flex flex-row items-center justify-start">
                <img
                  className="h-7 w-7 relative rounded object-cover"
                  alt=""
                  src="/avatar-shape@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[97px]">
                  Tran Bao Anh
                </a>
              </div>
            </div>
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0"
              alt=""
              src="/iconarrowdown-1.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
