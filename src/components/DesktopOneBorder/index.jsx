import React from "react";
import { Text, Heading, Img } from "./..";

export default function DesktopOneBorder({
  headingtext = "Nobody knows Portland and the peninsula better than David.",
  descriptiontext = (
    <>
      My wife and I had a dream of downsizing from our house in Cape Elizabeth <br />
      small condo closer to where we work and play in Portland.
    </>
  ),
  nametext = "Alfredo Donin",
  designationtext = "UI Designer",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full pt-[18px] pr-[18px] border-gray-300 border-2 border-solid`}
    >
      <div className="flex w-full flex-col items-start">
        <Img src="images/img_quotationmark_818f1745_svg.svg" alt="quotationimage" className="h-[28px] w-[28px]" />
        <Heading size="s" as="h6" className="mt-[39px]">
          {headingtext}
        </Heading>
        <Text size="lg" as="p" className="mt-[51px] w-full !font-medium leading-4 !text-blue_gray-900_01">
          {descriptiontext}
        </Text>
        <div className="mt-[30px] flex w-[39%] items-center gap-[19px] md:w-full">
          <Img
            src="images/img_profile2_6ef0620d_png.png"
            alt="profileimage"
            className="h-[35px] w-[35px] rounded-[50%]"
          />
          <div className="flex flex-col items-start self-start">
            <Heading size="xs" as="p" className="!font-nunitosans !font-semibold !text-gray-900_01">
              {nametext}
            </Heading>
            <Text size="xs" as="p" className="!font-nunitosans !text-gray-600_01">
              {designationtext}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
