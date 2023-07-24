import Image from "next/image";
import { Layout } from "@/app/components/Layout";
import { ListRecommend } from "@/app/components/LayoutEffect";
import { LayoutOption } from "@/app/components/LayoutEffect";
import { ListCategories } from "@/app/components/LayoutEffect";

export default function Home() {
  return (
    <Layout>
      <div className="flex">
        <div className="h-[316px] w-2/5 relative">
          <Image src="/images/d01.jpg" fill alt="" />
        </div>
        <div className="h-[316px] w-3/5 relative bg-dark-600"></div>
      </div>
      <div className="p-4">
        <LayoutOption />
      </div>
      <div className="mt-2 container mx-auto">
        <ListCategories />
      </div>
      <div className="mt-2 container mx-auto">
        <ListRecommend />
      </div>
    </Layout>
  );
}
