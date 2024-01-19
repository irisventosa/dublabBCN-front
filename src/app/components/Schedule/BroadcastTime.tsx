import Image from "next/image";

interface BroadcastTimeProps {
  broadcastTime: string;
}

const BroadcastTime = ({ broadcastTime }: BroadcastTimeProps) => {
  const showStartHour = parseInt(broadcastTime);
  const currentHourOfDay = new Date().getHours();

  const isShowHour = currentHourOfDay === showStartHour;

  return (
    <li>
      {isShowHour ? (
        <div>
          <span>ON AIR</span>
          <Image
            className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
            src={"/assets/Ellipse.svg"}
            alt={"Elipse"}
            width={18}
            height={18}
          />
        </div>
      ) : (
        <span className="sm:text-2xl">{broadcastTime}</span>
      )}
    </li>
  );
};

export default BroadcastTime;
