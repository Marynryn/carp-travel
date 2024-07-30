"use client";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Icon from "../../../components/icon-svg";

const JoinButton: React.FC = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width:1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const [iconProps, setIconProps] = useState({
    left: {
      id: "icon-mobile-left",
      width: 42,
      height: 53,
    },
    right: {
      id: "icon-mobile-right",
      width: 42,
      height: 53,
    },
  });

  useEffect(() => {
    if (isTablet) {
      setIconProps({
        left: {
          id: "icon-tablet-left",
          width: 35,
          height: 50,
        },
        right: {
          id: "icon-tablet-right",
          width: 35,
          height: 50,
        },
      });
    } else if (isDesktop) {
      setIconProps({
        left: {
          id: "icon-desktop-left",
          width: 44,
          height: 71,
        },
        right: {
          id: "icon-desktop-right",
          width: 44,
          height: 71,
        },
      });
    }
  }, [isTablet, isDesktop]);

  const scrollToContacts = () => {
    scroller.scrollTo("contacts", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="h-53 w-button-mobile mt-6 md:w-230 md:h-50 xl:h-71 xl:w-full mx-auto ">
      <button
        type="button"
        onClick={scrollToContacts}
        className="h-full flex cursor-pointer -bg--button-background items-center w-full uppercase hover:bg-hover-button focus:bg-hover-button "
      >
        <Icon
          id={iconProps.left.id}
          width={iconProps.left.width}
          height={iconProps.left.height}
          fill="var(--main-color)"
          stroke="var(--main-color)"
        />
        <span
          className="mx-auto xl:text-32 xl:font-bold
        "
        >
          Join now
        </span>
        <Icon
          id={iconProps.right.id}
          width={iconProps.right.width}
          height={iconProps.right.height}
          fill="var(--main-color)"
          stroke="var(--main-color)"
        />
      </button>
    </div>
  );
};

export default JoinButton;
