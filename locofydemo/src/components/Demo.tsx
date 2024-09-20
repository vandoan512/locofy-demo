import { FunctionComponent } from "react";
import Left from "./Left";
import Header from "./Header";
import FrameComponent from "./FrameComponent";
import HeaderTables from "./HeaderTables";
import Col from "./Col";
import Col2 from "./Col2";
import Col3 from "./Col3";
import Col1 from "./Col1";
import Action from "./Action";
import Pagination from "./Pagination";
import MainHeader from "./MainHeader";

export type DemoType = {
  className?: string;
};

const Demo: FunctionComponent<DemoType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 w-[1440px] h-[1174px] bg-gray-50 max-w-full overflow-hidden leading-[normal] tracking-[normal] mq900:h-auto mq900:min-h-[1174] ${className}`}
    >
      <Left />
      <Header />
      <div className="absolute top-[148px] left-[292px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] rounded-2xl bg-base-white w-[1136px] flex flex-row items-center justify-start flex-wrap content-center py-2 pl-2 pr-[7px] box-border gap-4 max-w-full">
        <FrameComponent
          arrowUp21="/arrowup2-1.svg"
          walletMoney1="/walletmoney-1.svg"
          vND="+3,734,000 VND"
          iconLineArrowRight="/iconlinearrowright.svg"
        />
        <FrameComponent
          propBackgroundColor="#fff1f3"
          arrowUp21="/arrowup2-1-1.svg"
          propColor="#e31b54"
          walletMoney1="/statusup-1.svg"
          vND="-3,734,000 VND"
          iconLineArrowRight="/iconlinearrowright-1.svg"
        />
        <FrameComponent
          propBackgroundColor="#edfcf2"
          arrowUp21="/arrowup2-1-2.svg"
          propColor="#099250"
          walletMoney1="/star1-1.svg"
          vND="+3,734,000 VND"
          iconLineArrowRight="/iconlinearrowright-2.svg"
        />
      </div>
      <main className="absolute top-[314px] left-[292px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] rounded-2xl bg-base-white border-gray-200 border-[1px] border-solid box-border w-[1136px] h-[848px] overflow-hidden flex flex-col items-start justify-start max-w-full mq900:h-auto">
        <HeaderTables />
        <section className="self-stretch overflow-hidden flex flex-row items-center justify-start relative shrink-0 [row-gap:20px] mq900:flex-wrap">
          <Col />
          <Col2 />
          <Col3 />
          <div className="w-60 flex flex-col items-start justify-start">
            <div className="self-stretch bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-3.5 px-4 pb-3">
              <div className="relative text-sm leading-[16px] font-medium font-heading-h6-medium text-gray-500 text-left">
                Email
              </div>
            </div>
            <div className="self-stretch flex-1 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-[22px] px-4">
              <div className="w-[169px] relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block shrink-0">
                baoanh.actsone@gmail.com
              </div>
            </div>
          </div>
          <Col1 />
          <Action />
        </section>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-2.5 box-border max-w-full">
          <div className="h-3 flex-1 rounded-981xl bg-gray-200 flex flex-row items-start justify-start max-w-full">
            <div className="h-[922px] relative rounded-981xl bg-gray-500 [transform:_rotate(90deg)]" />
          </div>
        </div>
        <Pagination />
      </main>
      <MainHeader />
    </form>
  );
};

export default Demo;