import Icon from "@/app/components/icon";
import React from "react";

export const JoinButton = () => {
  return (
    <div className="w-button-mobile mt-6" style={{ height: "53px" }}>
      <button
        type="button"
        className=" h-full flex  items-center w-full uppercase hover:bg-opacity-20"
        style={{
          backgroundColor: "var(--button-background)",
          // &.hover: {
          //     background: 0.2
          // }
        }}
      >
        <Icon
          id="icon-mobile-left"
          width={42}
          height={53}
          fill="var(--main-color)"
          stroke="var(--main-color)"
        />
        <span className="mx-auto">Join now</span>

        <Icon
          id="icon-mobile-right"
          width={42}
          height={53}
          fill="var(--main-color)"
          stroke="var(--main-color)"
        />
      </button>
    </div>
  );
};
export default JoinButton;
