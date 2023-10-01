import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCard = () => {
  return (
    <li className="flex flex-col justify-between min-w-[175px] w-[280px] h-[360px] rounded-[1rem]  ">
      <Skeleton
        baseColor="#FDE68A"
        height={230}
        width={280}
        borderRadius={16}
        style={{ padding: "1rem" }}
        className="flex justify-center items-center bg-colorCardbg p-4 rounded-t-[1rem] h-[230px]  "
      />

      <div className="bg-white clippy rounded-[1rem] border-t-2 border-amber-400 ">
        <div className="text-center font-bold ">
          <Skeleton width={150} />
          <Skeleton width={250} />
        </div>

        <div className="flex justify-between items-center p-4">
          <Skeleton width={80} height={20} />
          <Skeleton width={30} height={20} />
        </div>
      </div>
    </li>
  );
};
