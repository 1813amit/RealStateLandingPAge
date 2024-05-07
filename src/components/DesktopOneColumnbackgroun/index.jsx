import React from "react";
import { Text } from "./..";

export default function DesktopOneColumnbackgroun({
  durationtext = "Invest and Get 10 Years Golden Visa",
  obtaintext = "Obtain Golden Visa with &quot;No Minimum Equity Investment&quot;",
  investtext = "Invest in &quot;Sobha&quot; Renowned Developer of Dubai",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-[30px]`}>
      <div className="flex w-full items-start gap-[15px]">
        <div className="h-[32px] w-[32px] rounded-[16px] bg-green-600_60" />
        <Text as="p" className="mt-[5px] !text-gray-900_03">
          {durationtext}
        </Text>
      </div>
      <div className="flex items-center gap-[15px] self-stretch sm:flex-col">
        <div className="h-[32px] w-[32px] rounded-[16px] bg-green-600_60" />
        <Text as="p" className="!text-gray-900_03">
          {obtaintext}
        </Text>
      </div>
      <div className="flex w-full items-center gap-[15px] sm:flex-col">
        <div className="h-[32px] w-[32px] rounded-[16px] bg-green-600_60" />
        <Text as="p" className="!text-gray-900_03">
          {investtext}
        </Text>
      </div>
    </div>
  );
}
