import Image from "next/image";
import IconScrollSrc from "@/assets/icons/component_scroll.svg";

export const IconScroll = () => {
  return (
    <div className="hover:cursor-pointer z-40">
      <Image src={IconScrollSrc} width={48} height={48} alt="icon-trash" />
    </div>
  );
};
