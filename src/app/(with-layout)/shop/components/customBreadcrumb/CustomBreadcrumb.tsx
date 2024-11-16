import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbProps = {
  paths: { name: string; url: string }[];
};

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <Breadcrumb className="p-2 bg-[#F2F4F5] border w-full ">
      <BreadcrumbList className="flex items-center space-x-2 text-sm md:text-lg">
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={path.url}
                className="flex items-center text-gray-500 hover:text-primary"
              >
                {index === 0 && <FaHome className="mr-2" />}
                {path.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== paths.length - 1 && (
              <BreadcrumbSeparator>
                <FaChevronRight className="text-gray-500" />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
