import type { Metadata } from "next";
import Story from "@/components/Story";

export const metadata: Metadata = {
  title: "Our Story | Braj Pure — From the Sacred Land of Brij",
  description:
    "Discover how Braj Pure was born from a simple belief — that families deserve milk as pure as the holy land of Mathura & Vrindavan. Learn about our Gir cows and farm-to-doorstep journey.",
};

export default function StoryPage() {
  return (
    <>
      <Story />
    </>
  );
}
