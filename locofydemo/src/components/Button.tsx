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
      className={`flex-1 rounded-xl [background:linear-gradient(13.73deg,_#155eef,_#528bff)] flex flex-row items-center justify-center py-2 pl-[11px] pr-[15px] box-border gap-2 min-w-[105px] text-left text-lg text-base-white font-heading-h6-medium ${className}`}
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
        className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[98px]"
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
