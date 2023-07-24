import Image from "next/image";
import { ICategory } from "../LayoutEffect/ListCategories";

export const CategoryWithContent = ({ data }: { data: ICategory }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={data.src}
          width={234}
          height={145}
          style={{ height: 145, width: "100%" }}
          alt=""
        />
        <div className="text-[15px] bg-primary-300 text-white absolute left-0 bottom-0 px-[10px] py-[7px]">
          {data.desc}
        </div>
      </div>
      <div className="text-[15px] text-dark-600">{data.content}</div>
      <div className="text-[15px] text-primary-400">{data.dha}</div>
    </div>
  );
};
