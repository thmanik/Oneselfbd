import React from "react";
import { FaBox, FaCheck, FaHome, FaTruck } from "react-icons/fa";

type Status = {
  status: string;
  title: string;
  date: string;
  time: string;
  icon: string;
  isActive: boolean;
};

type TimelineEventProps = {
  status: string;
  title: string;
  date: string;
  time: string;
  icon: React.ReactNode;
  isActive: boolean;
};

const TimelineEvent: React.FC<TimelineEventProps> = ({
  status,
  title,
  date,
  time,
  icon,
  isActive,
}) => {
  return (
    <div className="flex mb-8">
      <div className="relative flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
            isActive
              ? "border-teal-500 bg-teal-100"
              : "border-gray-300 bg-gray-100"
          }`}
        >
          {icon}
        </div>
        <div
          className={`w-1 ${
            isActive ? "bg-teal-500" : "bg-gray-300"
          } h-full absolute top-12`}
        ></div>
      </div>
      <div className="ml-4 p-4 rounded-md shadow-md w-full bg-white">
        <h3
          className={`text-lg font-semibold ${
            isActive ? "text-teal-500" : "text-gray-500"
          }`}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600">{status}</p>
        <p className="text-xs text-gray-500">
          {date}, {time}
        </p>
      </div>
    </div>
  );
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

  return (
    <div className="p-6 bg-gray-50 shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6">
        Order Status{" "}
        <span className="text-teal-500">
          {statuses?.find((status) => status?.isActive)?.title}...
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
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
