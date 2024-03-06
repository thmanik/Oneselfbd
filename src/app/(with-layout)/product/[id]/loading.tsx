import ContainerMax from "@/components/containerMax/ContainerMax";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <>
      <ContainerMax className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
          <Skeleton className="h-80 w-full" />
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[100px]" />
            <div className="flex gap-2">
              <Skeleton className="h-10 flex-grow" />
              <Skeleton className="h-10 flex-grow" />
            </div>
          </div>
        </div>
      </ContainerMax>
    </>
  );
};

export default loading;
