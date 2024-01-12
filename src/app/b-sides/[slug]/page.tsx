"use client";
import Button from "@/app/components/Button";
import Tracklist from "@/app/components/Tracklist";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { Bside } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

interface BSideDetailsProps {
  params: {
    slug: string;
  };
}

const BsideDetails = ({ params }: BSideDetailsProps) => {
  const [iFrameShow, setIFrameShow] = useState("");
  const { getBsideData } = useDublabApi();
  const { data: bside } = useSWR<Bside>(params.slug, getBsideData);

  if (!bside) return <div>Loading...</div>;

  const listenToBside = (bsideLink: string) => {
    setIFrameShow(bsideLink);
  };

  const showUrl = extractUrlForEmbedPlayer(bside.mixcloud_url);
  const description = {
    __html: bside.description,
  };

  return (
    <main className="mt-[219px]  gap-[50px] flex  bg-black text-white ">
      <Image
        src={bside.picture}
        alt={""}
        width={660}
        height={327}
        className="h-[727px] object-cover"
      ></Image>
      <section className="max-h-[750px] min-w-[720px] overflow-scroll scrollbar-hide  bg-black">
        <div className="flex justify-between items-end">
          <ul className="flex">
            <li>
              <Button
                className="uppercase"
                actionOnClick={() => listenToBside(showUrl)}
              >
                Listen
              </Button>
            </li>
            <span className="loader"></span>
          </ul>
          {bside.tags && (
            <ul className="flex gap-[10px] opacity-40 mr-8">
              {bside.tags.map((tag, index) => (
                <li
                  key={index}
                  className=" text-[11px] border rounded-md pt-[5px] px-2 pb-[3px]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <h2 className="text-5xl h-[58px] mt-[56px]">{bside.name}</h2>
        <section className="flex gap-[140px]">
          <div
            dangerouslySetInnerHTML={description}
            className="text-sm w-[445px] mt-[140px]"
          />
        </section>
        <section className="flex-col items-end">
          {bside.tracklist && <Tracklist tracklist={bside.tracklist} />}
        </section>
      </section>
      {iFrameShow && (
        <iframe
          title="Programa de radio seleccionat"
          className="sm:w-screen w-screen  fixed bottom-0 left-0"
          height="60"
          allow="autoplay"
          src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=/${iFrameShow}`}
        ></iframe>
      )}
    </main>
  );
};

export default BsideDetails;
