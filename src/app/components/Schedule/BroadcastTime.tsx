import useMobileComponent from "@/app/lib/hooks/useMobileComponent";
import Image from "next/image";

interface BroadcastTimeProps {
  broadcastTime: string;
}

const BroadcastTime = ({ broadcastTime }: BroadcastTimeProps) => {
  const showStartHour = parseInt(broadcastTime);
  const currentHourOfDay = new Date().getHours();
  const isMobile = useMobileComponent();

  const isShowHour = currentHourOfDay === showStartHour;

  return (
    <li>
      {isShowHour ? (
        <div className="flex items-center gap-3 ">
          <Image
            className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[3px]"
            src={"/assets/Ellipse.svg"}
            alt={"Elipse"}
            width={18}
            height={18}
          />
          {isMobile && <span>ON AIR</span>}
        </div>
      ) : (
        <span className="sm:text-2xl">{broadcastTime}</span>
      )}
    </li>
  );
};

export default BroadcastTime;
