import React from "react";

type TimelineEventProps = {
  status: string;
  description: string;
  date: string;
  time: string;
  icon: React.ReactNode;
  isActive: boolean;
  isLast: boolean;
  isLeft: boolean;
};

const TimelineEvent: React.FC<TimelineEventProps> = ({
  status,
  description,
  date,
  time,
  icon,
  isActive,
  isLast,
  isLeft,
}) => {
  return (
    <div className={`relative flex mb-12 ${isLeft ? "flex-row-reverse" : ""}`}>
      {/* Vertical line */}
      <div
        className={`absolute w-1 ${
          isActive ? "bg-primary" : "bg-gray-300"
        } top-0 bottom-0 left-1/2 transform -translate-x-1/2`}
      ></div>

      {/* Timeline icon */}
      <div
        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
          isActive
            ? "border-primary bg-teal-100"
            : "border-gray-300 bg-gray-200"
        } absolute left-1/2 transform -translate-x-1/2`}
        style={{ zIndex: 10 }}
      >
        {icon}
      </div>

      {/* Content Container */}
      <div
        className={`relative w-40  md:w-full flex ${
          isLeft ? "justify-start" : "justify-end"
        } px-4 `}
      >
        <div
          className={`p-4 xms:mx-4 xls:mx-2 rounded-lg shadow-xl border border-gray-100 bg-white ${
            isLeft ? "text-right" : "text-left"
          } flex-1 ${isLeft ? " mr-10  md:mr-4" : "ml-10 md:ml-4"} ${
            isLeft
              ? "xms:w-40 xls:w-40 sm:w-52 md:w-80"
              : "xms:w-40 xls:w-40 sm:w-52 md:w-80 "
          } ${
            isActive
              ? isLeft
                ? "border-r-4 border-r-primary"
                : "border-l-4 border-l-primary"
              : ""
          }`}
          style={{
            minWidth: "150px",
            maxWidth: "220px",
          }}
        >
          <h3
            className={`text-[13px] sm:text-xs md:text-md lg:text-lg font-semibold ${
              isActive ? "text-primary" : "text-gray-600"
            }`}
          >
            {status}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
            {description}
          </p>
          <p className="text-[10px] sm:text-xxs md:text-xs text-gray-400">
            {date}, {time}
          </p>
        </div>
      </div>

      {/* Vertical line continuation */}
      {!isLast && (
        <div
          className={`absolute w-1 ${
            isActive ? "bg-primary" : "bg-gray-300"
          } left-1/2 transform -translate-x-1/2 top-full`}
          style={{ height: "calc(100% + 24px)" }}
        ></div>
      )}
    </div>
  );
};

export default TimelineEvent;
