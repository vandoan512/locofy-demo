import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ItemType = {
  className?: string;
  subtract?: string;
  img?: string;
  tranBaoAnh?: string;

  /** Style props */
  propBorderBottom?: CSSProperties["borderBottom"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propOverflow?: CSSProperties["overflow"];
  propTextOverflow?: CSSProperties["textOverflow"];
};

const Item: FunctionComponent<ItemType> = ({
  className = "",
  propBorderBottom,
  subtract,
  img,
  tranBaoAnh,
  propAlignSelf,
  propWidth,
  propDisplay,
  propOverflow,
  propTextOverflow,
}) => {
  const item1Style: CSSProperties = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  const tranBaoAnhStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      display: propDisplay,
      overflow: propOverflow,
      textOverflow: propTextOverflow,
    };
  }, [propAlignSelf, propWidth, propDisplay, propOverflow, propTextOverflow]);

  return (
    <div
      className={`self-stretch border-gray-200 border-b-[1px] border-solid flex flex-row items-center justify-start pt-3 px-4 pb-2.5 gap-3 text-left text-sm text-gray-700 font-heading-h6-medium ${className}`}
      style={item1Style}
    >
      <div className="h-5 w-5 relative">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-base-white border-gray-300 border-[1px] border-solid box-border w-full h-full" />
        <img
          className="absolute top-[calc(50%_-_4.5px)] left-[calc(50%_-_6px)] w-3 h-[9px] z-[1]"
          alt=""
          src={subtract}
        />
      </div>
      <div className="flex-1 flex flex-row items-center justify-start gap-4">
        <div className="flex flex-row items-center justify-start">
          <img
            className="h-10 w-10 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={img}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start">
          <div
            className="self-stretch relative leading-[16px] font-medium"
            style={tranBaoAnhStyle}
          >
            {tranBaoAnh}
          </div>
          <div className="self-stretch relative text-smi leading-[18px] text-gray-400">
            baoanh.actsone
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
