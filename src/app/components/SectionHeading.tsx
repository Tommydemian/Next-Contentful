import React from "react";

type SectionHeadingProps = {
  preTitle: string;
  title: string;
};

export const SectionHeading = ({ preTitle, title }: SectionHeadingProps) => {
  return (
    <div className="section-heading-container">
      <h3 className="section-heading-pretitle">{preTitle}</h3>
      <h2 className="section-heading-title">{title}</h2>
      <svg
        width="120"
        height="12"
        viewBox="0 0 120 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.70337 10.0998C1.94848 10.4062 7.39773 8.33122 8.57489 8.24403C13.968 7.84454 19.3911 7.23305 24.7756 6.68916C38.8823 5.26424 52.2829 1.97439 66.5063 1.97439C84.1478 1.97439 101.055 1.26023 118.168 4.68287"
          stroke="#E12C48"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};
