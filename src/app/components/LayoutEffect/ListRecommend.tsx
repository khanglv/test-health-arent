import { Button } from "../Button/Button";
import { CategoryWithContent } from "../Category";
import { ICategory } from "./ListCategories";

const dummyData = [
  {
    _id: 0,
    src: "/images/column-1.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
  {
    _id: 1,
    src: "/images/column-2.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
  {
    _id: 2,
    src: "/images/column-3.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
  {
    _id: 3,
    src: "/images/column-4.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
  {
    _id: 4,
    src: "/images/column-5.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
  {
    _id: 5,
    src: "/images/column-6.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
  {
    _id: 6,
    src: "/images/column-7.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
  {
    _id: 7,
    src: "/images/column-8.jpg",
    desc: "2021.05.17   23:25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dha: "#魚料理  #和食  #DHA",
  },
];

export const ListRecommend = () => {
  return (
    <div className="pt-[56px]">
      <div className="grid grid-cols-4 gap-x-2 gap-y-5">
        {dummyData.map((item: ICategory) => {
          return (
            <div key={item._id} className="flex justify-center">
              <CategoryWithContent data={item} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-7">
        <Button className="rounded-none bg-gradient-to-r from-primary-300 from-0% to-primary-400 to-100% text-white font-normal w-[15rem] hover:from-20% hover:to-60%">
          コラムをもっと見る
        </Button>
      </div>
    </div>
  );
};
