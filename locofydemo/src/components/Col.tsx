import { FunctionComponent } from "react";
import Item from "./Item";

export type ColType = {
  className?: string;
};

const Col: FunctionComponent<ColType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-sm text-gray-500 font-heading-h6-medium ${className}`}
    >
      <div className="bg-gray-100 border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-3 pb-2.5 pl-4 pr-[195px] gap-3">
        <div className="h-5 w-5 relative">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-base-white border-gray-300 border-[1px] border-solid box-border w-full h-full" />
          <img
            className="absolute top-[calc(50%_-_4.5px)] left-[calc(50%_-_6px)] w-3 h-[9px] z-[1]"
            alt=""
          />
        </div>
        <div className="relative leading-[16px] font-medium inline-block min-w-[37px]">
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
  );
};

export default Col;
