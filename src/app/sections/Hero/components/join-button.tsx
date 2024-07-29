"use client";
import React from "react";
import { scroller } from "react-scroll";
import Icon from "@/app/components/icon";
import { useMediaQuery } from "react-responsive";

const JoinButton: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1280px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const scrollToContacts = () => {
    scroller.scrollTo("contacts", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  let iconProps = {
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
  };

  if (isTablet) {
    iconProps = {
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
    };
  }

  if (isDesktop) {
    iconProps = {
      left: {
        id: "icon-desktop-left",
        width: 62,
        height: 72,
      },
      right: {
        id: "icon-desktop-right",
        width: 44,
        height: 71,
      },
    };
  }

  return (
    <div className="h-53 w-button-mobile mt-6 md:w-230 md:h-50">
      <button
        type="button"
        onClick={scrollToContacts}
        className="h-full flex -bg--button-background items-center w-full uppercase hover:bg-hover-button"
      >
        <Icon
          id={iconProps.left.id}
          width={iconProps.left.width}
          height={iconProps.left.height}
          fill="var(--main-color)"
          stroke="var(--main-color)"
        />
        <span className="mx-auto">Join now</span>
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
