import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonGroupBaseType = {
  className?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  iconEdit?: string;
  trailing?: string;
  iconLineArrowRight?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBorderTop?: CSSProperties["borderTop"];
  propBorderBottom?: CSSProperties["borderBottom"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinHeight?: CSSProperties["minHeight"];
  propMinWidth1?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
};

const ButtonGroupBase: FunctionComponent<ButtonGroupBaseType> = ({
  className = "",
  iconRight = true,
  iconLeft = false,
  propBorderRadius,
  propAlignSelf,
  propFlex,
  propBackgroundColor,
  propBorder,
  propBorderTop,
  propBorderBottom,
  propMinWidth,
  propMinHeight,
  iconEdit,
  trailing,
  propMinWidth1,
  propTextDecoration,
  propColor,
  propDisplay,
  iconLineArrowRight,
}) => {
  const buttonGroupBaseStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      alignSelf: propAlignSelf,
      flex: propFlex,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      borderTop: propBorderTop,
      borderBottom: propBorderBottom,
      minWidth: propMinWidth,
      minHeight: propMinHeight,
    };
  }, [
    propBorderRadius,
    propAlignSelf,
    propFlex,
    propBackgroundColor,
    propBorder,
    propBorderTop,
    propBorderBottom,
    propMinWidth,
    propMinHeight,
  ]);

  const leadingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      textDecoration: propTextDecoration,
      color: propColor,
      display: propDisplay,
    };
  }, [propMinWidth1, propTextDecoration, propColor, propDisplay]);

  return (
    <div
      className={`self-stretch flex-1 rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-center py-2 px-3.5 gap-2 text-left text-sm text-gray-700 font-heading-h6-medium ${className}`}
      style={buttonGroupBaseStyle}
    >
      {iconLeft && (
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src={iconEdit}
        />
      )}
      <a
        className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[58px]"
        style={leadingStyle}
      >
        {trailing}
      </a>
      {iconRight && (
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src={iconLineArrowRight}
        />
      )}
    </div>
  );
};

export default ButtonGroupBase;