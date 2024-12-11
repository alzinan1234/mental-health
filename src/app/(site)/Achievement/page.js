import AchievementPart from "@/components/Achievement/AchievementPart";
import Certification from "@/components/Achievement/Certification";
import Specialty from "@/components/Achievement/Specialty";
import React from "react";

const Achievement = () => {
  return (
    <div>
      <AchievementPart />
      <Certification />
      <Specialty />
    </div>
  );
};

export default Achievement;
