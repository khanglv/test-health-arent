import IconKnife from "@/assets/icons/knife.png";
import IconTrash from "@/assets/icons/trash.png";
import { Polygon } from "../Polygon";

export const LayoutOption = () => {
  return (
    <div className="flex justify-center gap-16">
      <Polygon src={IconKnife} title="Morning" />
      <Polygon src={IconKnife} title="Lunch" />
      <Polygon src={IconKnife} title="Dinner" />
      <Polygon src={IconTrash} title="Snack" />
    </div>
  );
};
