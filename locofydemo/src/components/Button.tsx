import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconCart?: string;
  buttonCTA?: string;
  iconCart1?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propMinHeight?: CSSProperties["minHeight"];
  propColor?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  iconLeft = true,
  iconRight = false,
  propBackground,
  propMinWidth,
  propBackgroundColor,
  propBorder,
  propMinHeight,
  iconCart,
  buttonCTA,
  propColor,
  propMinWidth1,
  iconCart1,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      minWidth: propMinWidth,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      minHeight: propMinHeight,
    };
  }, [
    propBackground,
    propMinWidth,
    propBackgroundColor,
    propBorder,
    propMinHeight,
  ]);

  const buttonCTAStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  return (
    <div
      className={`flex-1 rounded-xl bg-base-white border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 pl-2.5 pr-3.5 gap-2 min-w-[110px] min-h-[44px] text-left text-lg text-gray-700 font-heading-h6-medium ${className}`}
      style={buttonStyle}
    >
      {iconLeft && (
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0"
          alt=""
          src={iconCart}
        />
      )}
      <a
        className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[70px]"
        style={buttonCTAStyle}
      >
        {buttonCTA}
      </a>
      {iconRight && (
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0"
          alt=""
          src={iconCart1}
        />
      )}
    </div>
  );
};

export default Button;