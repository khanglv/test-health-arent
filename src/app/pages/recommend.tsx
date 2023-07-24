import Image from "next/image";
import { Layout } from "@/app/components/Layout";
import { ListRecommend } from "@/app/components/LayoutEffect";
import { LayoutOption } from "@/app/components/LayoutEffect";
import { ListCategories } from "@/app/components/LayoutEffect";

export default function Recommend() {
  return (
    <Layout>
      <div className="mt-2 container mx-auto">
        <ListRecommend />
      </div>
    </Layout>
  );
}
