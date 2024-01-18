import Image from "next/image";

interface BroadcastTimeProps {
  broadcastTime: string;
  listPosition: number;
}

const BroadcastTime = ({ broadcastTime, listPosition }: BroadcastTimeProps) => {
  const showStartHour = parseInt(broadcastTime);
  const currentHourOfDay = new Date().getHours();

  const isShowHour = currentHourOfDay === showStartHour;

  return (
    <li>
      {listPosition < 1 &&
        (isShowHour ? (
          <Image
            className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
            src={"/assets/Ellipse.svg"}
            alt={"Elipse"}
            width={18}
            height={18}
          />
        ) : (
          broadcastTime
        ))}
    </li>
  );
};

export default BroadcastTime;
