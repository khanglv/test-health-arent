import Image from "next/image";
import { ICategory } from "../LayoutEffect/ListCategories";

export const ItemCategory = ({ data }: { data: ICategory }) => {
  return (
    <div className="relative">
      <Image
        src={data.src}
        width={234}
        height={234}
        style={{ height: 234 }}
        alt=""
      />
      <div className="text-[15px] bg-primary-300 text-white absolute left-0 bottom-0 px-[10px] py-[7px]">
        {data.desc}
      </div>
    </div>
  );
};
