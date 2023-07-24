import { Button } from "../Button/Button";
import { ItemCategory } from "../Category";

const dummyData = [
  {
    _id: 0,
    src: "/images/d01.jpg",
    desc: "05.21.Morning",
  },
  {
    _id: 1,
    src: "/images/d02.jpg",
    desc: "05.21.Lunch",
  },
  {
    _id: 2,
    src: "/images/l01.jpg",
    desc: "05.21.Dinner",
  },
  {
    _id: 3,
    src: "/images/l02.jpg",
    desc: "05.21.Snack",
  },
  {
    _id: 4,
    src: "/images/l03.jpg",
    desc: "05.20.Morning",
  },
  {
    _id: 5,
    src: "/images/m01.jpg",
    desc: "05.20.Lunch",
  },
  {
    _id: 6,
    src: "/images/m02.jpg",
    desc: "05.20.Dinner",
  },
  {
    _id: 7,
    src: "/images/m03.jpg",
    desc: "05.21.Snack",
  },
];

export interface ICategory {
  _id: number;
  src: string;
  desc: string;
  content?: string;
  dha?: string;
}

export const ListCategories = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {dummyData.map((item: ICategory) => {
          return (
            <div key={item._id} className="flex justify-center">
              <ItemCategory data={item} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-7">
        <Button className="rounded-none bg-gradient-to-r from-primary-300 from-0% to-primary-400 to-100% text-white font-normal w-[15rem] hover:from-20% hover:to-60%">
          記録をもっと見る
        </Button>
      </div>
    </>
  );
};
