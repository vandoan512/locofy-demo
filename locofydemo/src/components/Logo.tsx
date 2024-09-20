import { FunctionComponent } from "react";

export type LogoType = {
  className?: string;
};

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[92px] flex flex-row items-start justify-start ${className}`}
    >
      <div className="h-6 flex-1 relative">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <img
                className="absolute h-[53.75%] w-[59.17%] top-[10.83%] right-[0%] bottom-[35.42%] left-[40.83%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/g1006.svg"
              />
              <img
                className="absolute h-full w-[32.31%] top-[0%] right-[67.69%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/g942.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
