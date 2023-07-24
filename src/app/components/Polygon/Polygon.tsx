import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface IPolygon {
  src: StaticImageData;
  title: string;
}

export const Polygon = ({ src, title }: IPolygon) => {
  return (
    <div id="polygon-layout" className="w-[136px] h-[136px] mx-[10px]">
      <div>
        <Image src={src} width={40} height={40} alt="icon-knife" />
      </div>
      <div className="text-lg">{title}</div>
    </div>
  );
};
