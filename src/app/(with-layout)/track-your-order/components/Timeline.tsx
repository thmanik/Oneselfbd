import React from "react";
import { FaCheck } from "react-icons/fa";
import TimelineEvent from "./TimelineEvent";

type Status = {
  status: string;
  title: string;
  date: string;
  time: string;
  icon: string;
  description: string;
  isActive: boolean;
};

type TimelineProps = {
  statuses: Status[];
  latestStatus: string;
};

const Timeline: React.FC<TimelineProps> = ({ statuses, latestStatus }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "check":
        return <FaCheck />;
      case "box":
        return <FaCheck />;
      case "truck":
        return <FaCheck />;
      default:
        return <FaCheck />;
    }
  };

  return (
    <div className="p-4 md:p-8 mx-auto w-full md:w-[600px]">
      <h2 className="text-md md:text-lg font-semibold mb-6 md:mb-8 text-center">
        Current status: <span className="text-primary"> {latestStatus}</span>
      </h2>
      <div className="relative">
        {statuses?.map((status, index) => (
          <TimelineEvent
            key={index}
            status={status?.status}
            description={status?.description}
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
