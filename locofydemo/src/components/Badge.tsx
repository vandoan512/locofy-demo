import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BadgeType = {
  className?: string;
  label?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propFlex?: CSSProperties["flex"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
};

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  propBackgroundColor,
  propFlex,
  label,
  propColor,
  propMinWidth,
  propFlex1,
  propDisplay,
}) => {
  const badge1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      flex: propFlex,
    };
  }, [propBackgroundColor, propFlex]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
      flex: propFlex1,
      display: propDisplay,
    };
  }, [propColor, propMinWidth, propFlex1, propDisplay]);

  return (
    <div
      className={`rounded-981xl bg-primary-50 flex flex-row items-center justify-center py-0.5 px-[9px] text-center text-sm text-primary-600 font-heading-h6-medium ${className}`}
      style={badge1Style}
    >
      <div
        className="flex-1 relative leading-[20px] font-medium inline-block min-w-[55px]"
        style={labelStyle}
      >
        {label}
      </div>
    </div>
  );
};

export default Badge;