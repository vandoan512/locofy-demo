import { FunctionComponent } from "react";
import TextField from "./TextField";
import Logo from "./Logo";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import FrameComponent from "./FrameComponent";
import Badge from "./Badge";
import Item from "./Item";
import Item2 from "./Item2";
import Tooltip from "./Tooltip";
import Pagination from "./Pagination";

export type DemoType = {
  className?: string;
};

const Demo: FunctionComponent<DemoType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 w-[1440px] h-[1174px] bg-gray-50 max-w-full overflow-hidden leading-[normal] tracking-[normal] mq900:h-auto mq900:min-h-[1174] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-base-white border-gray-200 border-r-[1px] border-solid box-border w-[280px] h-[1174px] flex flex-col items-start justify-start pt-[68px] px-0 pb-0 gap-5">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-col items-start justify-start pt-3 px-3 pb-2.5 top-[0] z-[99] sticky">
            <TextField
              iconRight={false}
              iconLeft
              propWidth="unset"
              propAlignSelf="stretch"
              propHeight="44px"
              hintText="Search"
              propTextDecoration="none"
              iconEyeOpen="pending_I3023:16403;9:2792"
              propGap="unset"
              propPadding="0px 2px 0px 0px"
              iconArrowDown="pending_I3023:16403;9:2795"
            />
          </div>
          <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-col items-start justify-start pt-5 px-3 pb-1.5 gap-3">
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[7px]">
              <b className="flex-1 relative text-sm leading-[20px] font-heading-h6-medium text-gray-400 text-left">
                MAIN MENU
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-1">
              <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-3 pl-2 pr-[127px] gap-3">
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/iconhome.svg"
                />
                <div className="relative text-base leading-[20px] font-medium font-heading-h6-medium text-gray-700 text-left inline-block min-w-[81px]">
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
                <a className="[text-decoration:none] relative text-base leading-[20px] font-medium font-heading-h6-medium text-gray-700 text-left inline-block min-w-[78px]">
                  Dashboard
                </a>
              </div>
              <div className="self-stretch h-[52px] rounded-xl bg-gray-50 border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 pl-2 pr-[119px] gap-3">
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconapp.svg"
                />
                <div className="relative text-base leading-[20px] font-medium font-heading-h6-medium text-primary-700 text-left inline-block min-w-[87px]">
                  Applications
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[486px] pl-3 pr-[11px]">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-px gap-3">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
              <b className="flex-1 relative text-sm leading-[20px] font-heading-h6-medium text-gray-400 text-left">
                SALES CHANEL
              </b>
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
        <div className="self-stretch flex flex-col items-start justify-start pt-3 px-3 pb-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-1">
            <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-2 pl-2 pr-[161px] gap-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iconsetting.svg"
              />
              <div className="relative text-base leading-[20px] font-medium font-heading-h6-medium text-gray-700 text-left inline-block min-w-[51px]">
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
              <div className="relative text-base leading-[20px] font-medium font-heading-h6-medium text-gray-700 text-left inline-block min-w-[84px]">
                Help Center
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[280px] w-[1160px] flex flex-col items-start justify-start max-w-full">
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
          <div className="w-[406px] flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
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
              propBackground="unset"
              propMinWidth="110px"
              propBackgroundColor="#fff"
              propBorder="1px solid #d0d5dd"
              propMinHeight="44px"
              iconCart="/iconcalendar.svg"
              buttonCTA="Monthly"
              propColor="#344154"
              propMinWidth1="70px"
              iconCart1="/iconarrowdown-1.svg"
            />
            <Button
              iconLeft
              iconRight={false}
              iconCart="/iconcart.svg"
              buttonCTA="Add product"
              iconCart1="pending_I3023:16461;290:8778"
            />
          </div>
        </div>
      </div>
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
        <section className="self-stretch flex flex-row items-center justify-start p-4 box-border relative gap-4 max-w-full mq900:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[460px] max-w-full mq700:min-w-full">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[499px] gap-2 mq900:flex-wrap">
              <b className="relative text-lg leading-[24px] inline-block font-heading-h6-medium text-gray-800 text-left min-w-[127px]">
                Team members
              </b>
              <Badge
                propBackgroundColor="#eff4ff"
                propFlex="unset"
                label="100 user"
                propColor="#155eef"
                propMinWidth="55px"
                propFlex1="1"
                propDisplay="inline-block"
              />
            </div>
            <div className="self-stretch relative text-sm leading-[20px] font-heading-h6-medium text-gray-500 text-left">
              Manage your team members and their account permissions here.
            </div>
          </div>
          <TextField
            iconRight={false}
            iconLeft
            hintText="Search member name"
            iconEyeOpen="pending_I3023:16535;9:2792"
            iconArrowDown="pending_I3023:16535;9:2795"
          />
          <div className="rounded-xl bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/iconfilter.svg"
            />
          </div>
          <div className="w-[59px] !m-[0] absolute bottom-[-4px] left-[441px] shadow-[0px_12px_16px_-4px_rgba(0,_0,_0,_0.08),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.03)] rounded-lg bg-gray-900 flex flex-row items-start justify-start py-2 px-3 box-border z-[2]">
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-4 w-4 absolute !m-[0] bottom-[-14px] left-[9px] rounded-sm"
                alt=""
                src="/arrow.svg"
              />
              <div className="relative text-xs leading-[16px] font-medium font-heading-h6-medium text-base-white text-left">
                Tooltip
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch overflow-hidden flex flex-row items-center justify-start relative shrink-0 [row-gap:20px] mq900:flex-wrap">
          <div className="flex flex-col items-start justify-start">
            <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-3 pb-2.5 pl-4 pr-[195px] gap-3">
              <div className="h-5 w-5 relative">
                <div className="absolute top-[0px] left-[0px] rounded-md bg-base-white border-gray-300 border-[1px] border-solid box-border w-full h-full" />
                <img
                  className="absolute top-[calc(50%_-_4.5px)] left-[calc(50%_-_6px)] w-3 h-[9px] z-[1]"
                  alt=""
                />
              </div>
              <div className="relative text-sm leading-[16px] font-medium font-heading-h6-medium text-gray-500 text-left inline-block min-w-[37px]">
                Name
              </div>
            </div>
            <Item
              subtract="pending_I3023:16544;726:1789"
              img="/img@2x.png"
              tranBaoAnh="Tran Bao Anh"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16552;726:1789"
              img="/img-1@2x.png"
              tranBaoAnh="Vo Gia An"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16560;726:1789"
              img="/img-2@2x.png"
              tranBaoAnh="Huyen Huyen Ton Nu Quy Nhu"
              propAlignSelf="unset"
              propWidth="161px"
              propDisplay="inline-block"
              propOverflow="hidden"
              propTextOverflow="ellipsis"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16568;726:1789"
              img="/img-3@2x.png"
              tranBaoAnh="Tran Bao Anh"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16576;726:1789"
              img="/img-4@2x.png"
              tranBaoAnh="Ten Gi Ma Dai Qua Ha"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16584;726:1789"
              img="/img-5@2x.png"
              tranBaoAnh="Tran Bao Anh"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16592;726:1789"
              img="/img-6@2x.png"
              tranBaoAnh="Tran Bao Anh"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16600;726:1789"
              img="/img-7@2x.png"
              tranBaoAnh="Tran Bao Anh"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
            <Item
              propBorderBottom="1px solid #eaecf0"
              subtract="pending_I3023:16608;726:1789"
              img="/img-8@2x.png"
              tranBaoAnh="Tran Bao Anh"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
            <Item
              propBorderBottom="unset"
              subtract="pending_I3023:16616;726:1789"
              img="/img-9@2x.png"
              tranBaoAnh="Tran Bao Anh"
              propAlignSelf="stretch"
              propWidth="unset"
              propDisplay="unset"
              propOverflow="unset"
              propTextOverflow="unset"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-center pt-3 px-[30px] pb-2.5 gap-2">
              <div className="relative text-sm leading-[16px] font-medium font-heading-h6-medium text-gray-500 text-left inline-block min-w-[41px]">
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
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-success-600 text-center">
                  Online
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[39px]">
              <div className="flex-1 rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-success-500" />
                </div>
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-success-600 text-center">
                  Online
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[39px]">
              <div className="flex-1 rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-success-500" />
                </div>
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-success-600 text-center">
                  Online
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[39px]">
              <div className="flex-1 rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-success-500" />
                </div>
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-success-600 text-center">
                  Online
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-4 pb-[18px]">
              <div className="flex-1 rounded-981xl bg-warning-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-warning-500" />
                </div>
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-warning-600 text-center">
                  Conecting
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-4 pb-[18px]">
              <div className="flex-1 rounded-981xl bg-warning-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-warning-500" />
                </div>
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-warning-600 text-center">
                  Conecting
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[17px]">
              <div className="flex-1 rounded-981xl bg-error-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-error-500" />
                </div>
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-error-600 text-center">
                  Disconect
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 pb-[18px] pl-4 pr-[17px]">
              <div className="flex-1 rounded-981xl bg-error-50 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-error-500" />
                </div>
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-heading-h6-medium text-error-600 text-center">
                  Disconect
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-5 px-4 pb-[18px]">
              <div className="rounded-981xl bg-gray-100 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-gray-500" />
                </div>
                <div className="relative text-sm leading-[20px] font-medium font-heading-h6-medium text-gray-600 text-center">
                  Offile
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-5 px-4">
              <div className="rounded-981xl bg-gray-100 flex flex-row items-center justify-center py-0.5 px-[9px] gap-1.5">
                <div className="flex flex-row items-center justify-center p-px">
                  <div className="h-1.5 w-1.5 relative rounded-[50%] bg-gray-500" />
                </div>
                <div className="relative text-sm leading-[20px] font-medium font-heading-h6-medium text-gray-600 text-center">
                  Offile
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-3 pb-2.5 pl-4 pr-[108px] gap-2">
              <div className="relative text-sm leading-[16px] font-medium font-heading-h6-medium text-gray-500 text-left inline-block min-w-[28px]">
                Role
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/iconhelp.svg"
              />
            </div>
            <div className="self-stretch flex-1 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[116px]">
                Fullstack Developer
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[103px]">
                Product Designer
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left">
                UI/UX Designer
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[78px]">
                UX Research
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[116px]">
                Backend Developer
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[60px]">
                QC Tester
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[117px]">
                Frontend Developer
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-[15px] pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left">
                UX Writing
              </div>
            </div>
            <div className="self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[22px] px-4 pb-5">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[75px]">
                QA Engineer
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-[22px] px-4">
              <div className="relative text-sm leading-[20px] font-heading-h6-medium text-gray-600 text-left inline-block min-w-[116px]">
                Backend Developer
              </div>
            </div>
          </div>
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
          <div className="flex-1 flex flex-col items-start justify-start min-w-[200px]">
            <div className="self-stretch bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-3.5 px-4 pb-3">
              <div className="relative text-sm leading-[16px] font-medium font-heading-h6-medium text-gray-500 text-left inline-block min-w-[34px]">
                Team
              </div>
            </div>
            <Item2
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="1px solid #eaecf0"
              propOverflowX="auto"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propBackgroundColor3="#f2f4f7"
              propFlex="unset"
              propFlex1="unset"
              propFlex2="unset"
              propFlex3="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propColor3="#475467"
              propMinWidth="unset"
              propMinWidth1="62px"
              propMinWidth2="44px"
              propMinWidth3="19px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propFlex14="unset"
              propDisplay="unset"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propDisplay3="inline-block"
            />
            <Item2
              propBorderBottom="unset"
              propOverflowX="unset"
              label="IT"
              label1="Marketing"
              label2="Design"
              label3="+3"
              propBackgroundColor="#edfcf2"
              propBackgroundColor1="#fffaeb"
              propBackgroundColor2="#eff4ff"
              propFlex="unset"
              propFlex1="1"
              propFlex2="unset"
              propColor="#099250"
              propColor1="#dc6803"
              propColor2="#155eef"
              propMinWidth="unset"
              propMinWidth1="unset"
              propMinWidth2="44px"
              propFlex11="unset"
              propFlex12="1"
              propFlex13="1"
              propDisplay="unset"
              propDisplay1="unset"
              propDisplay2="inline-block"
            />
          </div>
          <div className="h-[684px] !m-[0] absolute top-[0px] right-[0px] shadow-[0px_20px_24px_-4px_rgba(0,_0,_0,_0.08),_0px_8px_8px_-4px_rgba(0,_0,_0,_0.03)] bg-base-white flex flex-col items-start justify-start z-[1]">
            <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-center pt-3.5 px-9 pb-3">
              <div className="relative text-sm leading-[16px] font-medium font-heading-h6-medium text-gray-500 text-left inline-block min-w-[40px]">
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
        </section>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-2.5 box-border max-w-full">
          <div className="h-3 flex-1 rounded-981xl bg-gray-200 flex flex-row items-start justify-start max-w-full">
            <div className="h-[922px] relative rounded-981xl bg-gray-500 [transform:_rotate(90deg)]" />
          </div>
        </div>
        <Pagination />
      </main>
      <header className="absolute top-[0px] left-[0px] w-[1368px] flex flex-row items-start justify-between max-w-full gap-5 mq900:flex-wrap">
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
            <a className="[text-decoration:none] relative text-5xl tracking-[0.01em] leading-[30px] font-bold font-heading-h6-medium text-gray-800 text-left inline-block min-w-[124px] mq450:text-[19px] mq450:leading-[24px]">
              Dashboard
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full">
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
                  <a className="[text-decoration:none] relative text-base leading-[20px] font-medium font-heading-h6-medium text-gray-700 text-left inline-block min-w-[97px]">
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
    </form>
  );
};

export default Demo;
