import React from "react";
import { FaBox, FaCheck, FaHome, FaTruck } from "react-icons/fa";
import TimelineEvent from "./TimelineEvent";

type Status = {
  status: string;
  title: string;
  date: string;
  time: string;
  icon: string;
  isActive: boolean;
};

type TimelineProps = {
  statuses: Status[];
};

const Timeline: React.FC<TimelineProps> = ({ statuses }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "check":
        return <FaCheck />;
      case "box":
        return <FaBox />;
      case "truck":
        return <FaTruck />;
      case "home":
        return <FaHome />;
      default:
        return <FaCheck />;
    }
  };

  // Find the currently active status
  const activeStatus = statuses?.find((status) => status?.isActive);

  return (
    <div className="p-4 md:p-8 mx-auto w-full md:w-[600px]">
      <h2 className="text-md md:text-lg font-semibold mb-6 md:mb-8 text-center">
        Order Status:{" "}
        <span className="text-primary text-lg md:text-xl">
          {activeStatus ? activeStatus?.title : "No active status"}
        </span>
      </h2>
      <div className="relative">
        {statuses?.map((status, index) => (
          <TimelineEvent
            key={index}
            status={status?.status}
            title={status?.title}
            date={status?.date}
            time={status?.time}
            icon={getIcon(status?.icon)}
            isActive={status?.isActive}
            isLast={index === statuses?.length - 1}
            isLeft={index % 2 === 0} // Alternates the side
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
