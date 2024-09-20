import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TextFieldType = {
  className?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  hintText?: string;
  iconEyeOpen?: string;
  iconArrowDown?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
};

const TextField: FunctionComponent<TextFieldType> = ({
  className = "",
  iconRight = false,
  iconLeft = true,
  propWidth,
  propAlignSelf,
  propHeight,
  hintText,
  propTextDecoration,
  iconEyeOpen,
  propGap,
  propPadding,
  iconArrowDown,
}) => {
  const textFieldStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propWidth, propAlignSelf, propHeight]);

  const hintTextStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const itemStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding,
    };
  }, [propGap, propPadding]);

  return (
    <div
      className={`self-stretch h-11 rounded-xl bg-base-white border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2 px-[11px] gap-2 text-left text-base text-gray-400 font-heading-h6-medium ${className}`}
      style={textFieldStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-2">
        {iconLeft && (
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/iconsearch.svg"
          />
        )}
        <a
          className="[text-decoration:none] flex-1 relative leading-[24px] text-[inherit]"
          style={hintTextStyle}
        >
          {hintText}
        </a>
      </div>
      {iconRight && (
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0"
          alt=""
          src={iconEyeOpen}
        />
      )}
      <div
        className="h-[22px] hidden flex-row items-center justify-start py-0 pl-0 pr-0.5 box-border text-gray-700"
        style={itemStyle}
      >
        <div className="relative leading-[24px]">VND</div>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src={iconArrowDown}
        />
      </div>
    </div>
  );
};

export default TextField;