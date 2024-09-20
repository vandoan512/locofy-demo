import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  arrowUp21?: string;
  walletMoney1?: string;
  vND?: string;
  iconLineArrowRight?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propBackgroundColor,
  arrowUp21,
  propColor,
  walletMoney1,
  vND,
  iconLineArrowRight,
}) => {
  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const emptyStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`flex-1 rounded-lg bg-gray-100 border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0.5 px-[3px] pb-1.5 gap-2 min-w-[272px] max-w-full text-left text-sm text-gray-600 font-heading-h6-medium ${className}`}
    >
      <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] rounded bg-base-white flex flex-row items-center justify-between p-4 gap-0 [row-gap:20px] mq450:flex-wrap">
        <div className="w-[274.7px] flex flex-col items-start justify-start gap-3">
          <div className="flex flex-row items-center justify-start gap-[7px]">
            <div className="relative leading-[20px] font-medium">
              PRODUCT STOCK
            </div>
            <div
              className="rounded-981xl bg-success-50 flex flex-row items-center justify-center py-0.5 pl-[9px] pr-[7px] gap-1 text-center text-success-600"
              style={badgeStyle}
            >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src={arrowUp21}
              />
              <div
                className="flex-1 relative leading-[20px] font-medium inline-block min-w-[41px]"
                style={emptyStyle}
              >
                4,23%
              </div>
            </div>
          </div>
          <b className="self-stretch relative text-xl leading-[26px] text-gray-700 mq450:text-base mq450:leading-[21px]">
            32,323,734 VND
          </b>
        </div>
        <div className="rounded-xl bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px]">
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={walletMoney1}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-1 gap-5 text-gray-700">
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="relative leading-[16px] font-medium inline-block min-w-[108px]">
            {vND}
          </div>
          <div className="relative leading-[20px] text-gray-400 inline-block min-w-[112px]">
            form last yesterday
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src={iconLineArrowRight}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
