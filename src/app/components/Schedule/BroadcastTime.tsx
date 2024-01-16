// BroadcastTime.tsx
import Image from "next/image";

interface BroadcastTimeProps {
  broadcastTime: string;
  listPosition: number;
  currentDayOfWeek: number;
}

const BroadcastTime = ({
  broadcastTime,
  listPosition,
  currentDayOfWeek,
}: BroadcastTimeProps) => {
  const showStartHour = new Date(broadcastTime).getHours();
  const currentHourOfDay = new Date().getHours();

  const isShowHour = currentHourOfDay === showStartHour;

  return (
    <li>
      {listPosition < 1 &&
      currentDayOfWeek === new Date(broadcastTime).getDay() ? (
        isShowHour ? (
          <Image
            className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
            src={"/assets/Ellipse.svg"}
            alt={"Elipse"}
            width={18}
            height={18}
          />
        ) : (
          broadcastTime
        )
      ) : (
        broadcastTime
      )}
    </li>
  );
};

export default BroadcastTime;
