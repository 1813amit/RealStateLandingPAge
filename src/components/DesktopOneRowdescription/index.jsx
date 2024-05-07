import React from "react";
import { Img, Text, Heading } from "./..";

export default function DesktopOneRowdescription({
  lifestyleimage = "images/img_icon.svg",
  lifestyleheading = "Lifestyle",
  descriptiontext = (
    <>
      Dive into the vibrant character of our featured
      <br />
      neighborhoods and properties. Explore the local
      <br />
      culture, entertainment, and recreational options
      <br />
      that make each location special. Find the perfect
      <br />
      setting to create your dream lifestyle.
    </>
  ),
  readmoretext = "Read more ",
  readmoreimage = "images/img_arrow_right.svg",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center w-full`}>
      <div className="flex w-full flex-col">
        <div className="ml-12 flex items-center md:ml-0">
          <div className="flex border-[5px] border-solid border-green-500 px-[15px] pb-3.5 pt-[15px]">
            <Img src={lifestyleimage} alt="lifestyleimage" className="h-[40px] w-[40px]" />
          </div>
          <Heading size="2xl" as="h3" className="relative mb-[15px] ml-[-17px] self-end">
            {lifestyleheading}
          </Heading>
        </div>
        <Text size="md" as="p" className="mt-[39px] leading-6 !text-gray-700">
          {descriptiontext}
        </Text>
        <div className="mt-4 flex items-center gap-[7px]">
          <a
            href="https://www.figma.com/file/XdAX46EuKTQgIDnBEu3Nr6?type=design&node-id=14-2&mode=design"
            target="_blank"
            rel="noreferrer"
          >
            <Text as="p" className="!font-medium">
              {readmoretext}
            </Text>
          </a>
          <Img src={readmoreimage} alt="arrowrightimage" className="m-[5px] h-[14px] w-[14px] self-end" />
        </div>
      </div>
    </div>
  );
}
