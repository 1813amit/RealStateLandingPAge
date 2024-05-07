import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, CheckBox, Input } from "../../components";
import DesktopOneBorder from "../../components/DesktopOneBorder";
import DesktopOneColumnbackgroun from "../../components/DesktopOneColumnbackgroun";
import DesktopOneRowdescription from "../../components/DesktopOneRowdescription";
import Header from "../../components/Header";

const data = [
  {
    lifestyleimage: "images/img_icon.svg",
    lifestyleheading: "Lifestyle",
    descriptiontext:
      "<>Dive into the vibrant character of our featured<br />neighborhoods and properties. Explore the local<br />culture, entertainment, and recreational options<br />that make each location special. Find the perfect<br />setting to create your dream lifestyle.</>",
    readmoretext: "Read more ",
    readmoreimage: "images/img_arrow_right.svg",
  },
  {
    lifestyleimage: "images/img_calendar_black_900.png",
    lifestyleheading: "Buy",
    descriptiontext:
      "<>Our comprehensive Loans section provides<br />valuable insights into mortgage options and<br />financing solutions. Learn about the various loan<br />types, interest rates, and expert tips to make your<br />real estate ambitions a reality.</>",
    readmoretext: "Read more ",
    readmoreimage: "images/img_calendar.svg",
  },
  {
    lifestyleimage: "images/img_icon_black_900.svg",
    lifestyleheading: "Sell",
    descriptiontext:
      "<>Explore our Sell section to discover the expert<br />guidance and resources you need to successfully<br />list and sell your property. From pricing strategies<br />to marketing techniques, we&#39;ve got you covered<br />every step of the way.</>",
    readmoretext: "Read more ",
    readmoreimage: "images/img_arrow_right.svg",
  },
];
const data1 = [
  { golfImage: "images/img_golf_svg.svg", golfLabel: "Golf Course" },
  { golfImage: "images/img_gated_svg.svg", golfLabel: "Gated Community" },
  { golfImage: "images/img_lakes_svg.svg", golfLabel: "Lakes and Parks" },
  { golfImage: "images/img_clubhouse_svg.svg", golfLabel: "Club House" },
  { golfImage: "images/img_gym_svg.svg", golfLabel: "Gym & Yoga Area" },
  { golfImage: "images/img_pool_svg.svg", golfLabel: "Resort Style Pools" },
  { golfImage: "images/img_garden_svg.svg", golfLabel: "Sky Gardens" },
  { golfImage: "images/img_mall_svg.svg", golfLabel: "Shopping Mall" },
];
const data2 = [
  {
    headingtext: "Nobody knows Portland and the peninsula better than David.",
    descriptiontext:
      "<>My wife and I had a dream of downsizing from our house in Cape Elizabeth <br />small condo closer to where we work and play in Portland.</>",
    nametext: "Alfredo Donin",
    designationtext: "UI Designer",
  },
  {
    headingtext: "Nobody knows Portland and the peninsula better than David.",
    descriptiontext:
      "<>My wife and I had a dream of downsizing from our house in Cape Elizabeth <br />small condo closer to where we work and play in Portland.</>",
    nametext: "Alfredo Donin",
    designationtext: "UI Designer",
  },
  {
    headingtext: "Nobody knows Portland and the peninsula better than David.",
    descriptiontext:
      "<>My wife and I had a dream of downsizing from our house in Cape Elizabeth <br />small condo closer to where we work and play in Portland.</>",
    nametext: "Alfredo Donin",
    designationtext: "UI Designer",
  },
];
const data3 = [
  {
    priceLink: "Starting From AED 1.4M",
    offerText: "<>Book now with 2% only and get 10% guranteed rental returns and<br />high capital appreciation.</>",
  },
  {
    priceLink: "The Perfect Residency",
    offerText:
      "<>Sobha One is located just 8 minutes away from Burj Khalifa &<br />Dubai and offering world-class services.</>",
  },
  {
    priceLink: "Elegant And Refined Interiors",
    offerText:
      "<>Each Sobha One apartment beckons is studded with all the<br />amenities that come with luxury living.</>",
  },
];

export default function DesktopOnePage() {
  return (
    <>
    
      <Helmet>
        <title>Sobha One Dubai - Luxury Golf Course Apartments</title>
        <meta
          name="description"
          content="Discover Sobha One, Dubai's new launch offering luxury 1 to 4 bedroom apartments with a private golf course, resort-style pools, and guaranteed 10% rental returns. Perfect for investment and a dream lifestyle."
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* navigation bar section */}
        <Header />
        <div className="flex flex-col items-center">
          {/* hero banner section */}
          <div className="flex h-[745px] items-center justify-center gap-3 self-stretch bg-[url(/public/images/img_group_2_3.png)] bg-cover bg-no-repeat px-14 pb-[70px] pt-[69px] md:h-auto md:flex-col md:p-5">
            <div className="mb-[97px] flex w-[47%] flex-col items-start self-end md:w-full">
              <Text size="7xl" as="p" className="!font-plusjakartasans uppercase tracking-[0.48px]  !text-white-A700">
                Sobha one
              </Text>
              <Text
                size="7xl"
                as="p"
                className="mt-5 w-full uppercase leading-[48px] tracking-[0.48px]  !text-white-A700"
              >
                <>
                  Dubai’s
                  <br />
                  <span className=" text-gray-200  font-semibold ">Hottest New Launch!</span>
                </>
              </Text>
              <Button
                size="xl"
                variant="gradient"
                shape="round"
                color="green_500_green_600_01"
                className="mt-[54px] min-w-[240px] font-plusjakartasans font-bold tracking-[0.14px] sm:px-5"
              >
                Download Brochure
              </Button>
            </div>
            <div className="flex w-[43%] flex-col items-start rounded-lg bg-white-A700 pb-12 pl-[35px] pt-[41px] md:w-full md:p-5 md:py-5 sm:pl-5">
              <Heading size="xs" as="h1" className="ml-1 !font-plusjakartasans !text-blue_gray-900_03 md:ml-0">
                Name
              </Heading>
              <div className="ml-1 mt-2 flex items-center justify-between gap-5 self-stretch md:ml-0 sm:flex-col">
                <Input
                  shape="round"
                  name="Text Input"
                  placeholder={`Name`}
                  className="w-[92%] font-plusjakartasans sm:w-full sm:pr-5"
                />
                <Img src="images/img_arrow_down.png" alt="dropdown arrow" className="h-[16px] object-cover sm:w-full" />
              </div>
              <Heading
                size="xs"
                as="h2"
                className="ml-1 mt-[25px] !font-plusjakartasans !text-blue_gray-900_03 md:ml-0"
              >
                Email
              </Heading>
              <div className="ml-1 mt-2 flex items-center justify-between gap-5 self-stretch md:ml-0 sm:flex-col">
                <Input
                  shape="round"
                  name="Email Input"
                  placeholder={`Email`}
                  className="w-[92%] font-plusjakartasans sm:w-full sm:pr-5"
                />
                <Img src="images/img_arrow_down.png" alt="dropdown arrow" className="h-[16px] object-cover sm:w-full" />
              </div>
              <Heading
                size="xs"
                as="h3"
                className="ml-1 mt-[25px] !font-plusjakartasans !text-blue_gray-900_03 md:ml-0"
              >
                Phone
              </Heading>
              <div className="mt-[9px] flex w-[94%] md:w-full sm:flex-col">
                <div className="relative z-[1] flex flex-col items-center rounded-sm border-r border-solid border-teal-50 pb-[18px] pl-2 pr-2.5 pt-[19px]">
                  <Img src="images/img_button_listbox.png" alt="listbox button" className="h-[11px] object-cover" />
                </div>
                <Input
                  shape="square"
                  name="Phone Input"
                  placeholder={`+1`}
                  className="relative ml-[-29px] flex-grow font-roboto tracking-[0.16px] sm:ml-0 sm:px-5"
                />
              </div>
              <Heading
                size="xs"
                as="h4"
                className="ml-1 mt-[26px] !font-plusjakartasans !text-blue_gray-900_03 md:ml-0"
              >
                Preferred Language
              </Heading>
              <div className="ml-1 mt-2 flex items-center justify-between gap-5 self-stretch md:ml-0 sm:flex-col">
                <Input
                  shape="round"
                  name="Language Input"
                  placeholder={`English`}
                  className="w-[92%] font-plusjakartasans sm:w-full sm:pr-5"
                />
                <Img src="images/img_arrow_down.png" alt="dropdown arrow" className="h-[16px] object-cover sm:w-full" />
              </div>
              <CheckBox
                name="Mortgage Checkbox"
                label="Interested in mortgage advice?"
                id="MortgageCheckbox"
                className="ml-1 mt-[27px] gap-3 p-px font-plusjakartasans text-sm font-bold text-blue_gray-900_03 md:ml-0"
              />
              <div className="ml-1 mt-6 flex w-[93%] flex-col items-center gap-2.5 md:ml-0 md:w-full">
                <Button
                  size="lg"
                  variant="gradient"
                  shape="round"
                  color="green_500_green_600"
                  className="w-full font-plusjakartasans font-bold tracking-[0.14px] sm:px-5"
                >
                  Register your interest
                </Button>
                <Text size="s" as="p" className="flex !font-plusjakartasans tracking-[0.12px] !text-blue_gray-900_03">
                  <span className="text-blue_gray-900_03">By clicking Submit, you agree to our&nbsp;</span>
                  <a href="#" className="text-blue_gray-900_03 underline">
                    Terms & Conditions
                  </a>
                  <span className="text-blue_gray-900_03">&nbsp;and&nbsp;</span>
                  <a href="#" className="text-blue_gray-900_03 underline">
                    Privacy Policy.
                  </a>
                </Text>
              </div>
            </div>
          </div>

          {/* services section */}
          <div className="mt-[86px] flex w-[85%] flex-col items-start gap-[74px] pl-[5px] md:w-full md:gap-[55px] md:p-5 sm:gap-[37px]">
            <Heading size="3xl" as="h2" className="!text-[41.6px]">
              Our Services
            </Heading>
            <div className="ml-[15px] flex gap-[115px] self-stretch md:ml-0 md:flex-col">
              {data.map((d, index) => (
                <DesktopOneRowdescription {...d} key={"servicesList" + index} />
              ))}
            </div>
          </div>

          {/* cluster selection section */}
          <div className="mt-[66px] flex flex-col items-start gap-16 self-stretch pb-4 pl-[87px] pr-14 pt-[22px] md:px-5 sm:gap-8 sm:pt-5">
            <Heading size="3xl" as="h2" className="flex !text-[41.6px]">
              <span className="text-5xl text-black-900">Choose Your&nbsp;</span>
              <a href="#" className="text-5xl text-green-500 underline">
                Cluster
              </a>
            </Heading>
            <div className="flex w-[93%] md:w-full">
              <div className="flex w-full items-center gap-[26px] md:flex-col">
                <Img
                  src="images/img_mudon_1_44961d8833_webp.png"
                  alt="first image"
                  className="h-[759px] w-[43%] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col gap-[29px] md:self-stretch">
                  <Img
                    src="images/img_mudon_3_47788c1c02_webp.png"
                    alt="second image"
                    className="h-[367px] object-cover"
                  />
                  <Img
                    src="images/img_mudon_4_5e4946586e_webp.png"
                    alt="third image"
                    className="h-[364px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* about section */}
          <div className="mt-[118px] flex  w-[80%] self-center md:w-full md:p-5">
            <div className="flex ic w-full justify-between gap-5 md:flex-col">
              <Img
                src="images/img_sobha_one_about_webp.png"
                alt="about image"
                className="h-[620px] w-[44%] object-cover md:w-full"
              />
              <div className="flex w-[49%] flex-col gap-[11px] md:w-full">
                <div className="flex flex-col items-center gap-5 bg-white-A700 pb-6 sm:pb-5">
                  <Heading
                    size="5xl"
                    as="h2"
                    className="w-[93%] !font-roboto leading-[57px] !text-deep_orange-A200 md:w-full md:p-5"
                  >
                    <span className="text-green-500">Sobha One</span>
                    <span className="text-gray-900_03">
                      <>
                        &nbsp;- Perfect
                        <br />
                        Fusion Of Luxury & Golf
                      </>
                    </span>
                  </Heading>
                  <Text
                    size="xl"
                    as="p"
                    className="w-[90%] !text-[15.75px] leading-6 !text-blue_gray-600 md:w-full md:p-5"
                  >
                    <>
                      Introducing exclusive collection of 1 to 4 bedroom apartments and
                      <br />
                      each unit is meticulously crafted facing lush green private golf course
                      <br />
                      along with leisure amenities nestled at the podium level.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-[47px] bg-white-A700 pl-[68px] pr-[34px] pt-[13px] md:pl-5 sm:px-5 sm:pb-5">
                  {data3.map((d, index) => (
                    <div key={"priceList" + index} className="flex flex-1 flex-col items-start gap-2.5">
                      <a
                        href="https://www.figma.com/file/XdAX46EuKTQgIDnBEu3Nr6?type=design&node-id=12-1621&mode=design"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text size="5xl" as="p" className="!text-light_blue-A700">
                          {d.priceLink}
                        </Text>
                      </a>
                      <Text as="p" className="w-full leading-6 !text-blue_gray-600">
                        {d.offerText}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* amenities section */}
          <div className="mt-[172px] flex w-[80%] flex-col gap-[50px] pb-[49px] md:w-full md:p-5 md:pb-5">
            <div className="container-xs flex flex-col items-center gap-3.5 pl-96 pr-[386px] md:px-5">
              <div className="flex w-[42%] justify-center rounded-[14px] bg-green-500_19 md:w-full">
                <Heading size="s" as="h2" className="!font-nunitosans !text-green-500">
                  Our Amenities
                </Heading>
              </div>
              <Heading size="5xl" as="h3" className="w-full !font-roboto !text-[38px] place-items-center grid !text-gray-900_03">
                Project Amenities
              </Heading>
            </div>
            <div className="container-xs grid grid-cols-4 justify-center gap-[15px] md:grid-cols-2 sm:grid-cols-1">
              {data1.map((d, index) => (
                <div
                  key={"featuresGrid" + index}
                  className="flex w-full flex-col items-center rounded-[10px] bg-white-A700 px-10 pb-[45px] pt-10 shadow-sm md:pb-5 sm:p-5"
                >
                  <Img src={d.golfImage} alt="golf image" className="h-[50px] w-[50px]" />
                  <Heading as="h4" className="w-[210px] place-items-center grid  ">{d.golfLabel}</Heading>
                </div>
              ))}
            </div>
          </div>

          {/* investment opportunity section */}
          <div className="mt-[88px] flex justify-center self-stretch bg-gray-100 pb-[13px] pt-[119px] md:pt-5">
            <div className="container-xs flex justify-center pl-[57px] pr-14 md:p-5 md:px-5">
              <div className="flex w-full flex-col items-start">
                <div className="flex flex-col items-center gap-[25px] self-stretch pb-[63px] md:pb-5">
                  <div className="flex flex-col items-center gap-[7px] self-stretch">
                    <Heading
                      size="5xl"
                      as="h2"
                      className="w-full text-center !font-roboto leading-[57px] !text-gray-900_03"
                    >
                      <>
                        10% Guranteed Rental Returns And High Capital
                        <br />
                        Appreciation
                      </>
                    </Heading>
                    <div className="flex w-[49%] justify-center px-[7px] md:w-full">
                      <Text as="p" className="w-full text-center leading-6 !text-blue_gray-600">
                        <>
                          Get the best out of your investment with a guaranteed 10% annual
                          <br />
                          return on investment (ROI) Book your very own Sobha apartment for
                          <br />
                          just 2% of its price.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[92%] pt-[30px] md:w-full sm:pt-5">
                    <div className="flex w-full gap-[6g0px] md:flex-col">
                      {[...Array(2)].map((d, index) => (
                        <DesktopOneColumnbackgroun
                          durationtext="Invest and Get 10 Years Golden Visa Equity Investment okk okk"
                          obtaintext='Obtain Golden Visa with "No Minimum Equity Investment okk okk"'
                          investtext='Invest in "Sobha" Renowned Developer of Dubai Equity Investment'
                          key={"listBackground" + index}
                          className="flex-1 md:gap-[30px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Button size="sm" shape="round" className="relative ml-7 mt-[-8px] min-w-[123px] md:ml-0">
                  Let&#39;s Connect
                </Button>
              </div>
            </div>
          </div>

          {/* brochure download section */}
          <div className="container-xs relative mt-[135px] h-[986px] bg-gray-50_02 px-[15px] pb-[105px] pt-3.5 md:h-auto md:p-5 md:pb-5">
            <div className="flex w-full flex-col items-center">
              <Img
                src="images/img_image.png"
                alt="feature image"
                className="relative z-[2] h-[563px] w-[83%] object-cover"
              />
              <div className="relative mt-[-265px] flex flex-col items-start justify-center gap-[50px] self-stretch rounded-[15px] bg-gray-900_02 pb-6 pl-[92px] pr-14 pt-[387px] md:px-5 md:pt-5 sm:p-5">
                <Text size="3xl" as="p" className="w-[48%] leading-7 !text-white-A700 md:w-full">
                  <>
                    Know more about location, amenities, layouts and
                    <br />
                    prices of Sobha One by downloading the brochure.
                  </>
                </Text>
                <Button size="xl" shape="round" className="min-w-[194px] sm:px-5">
                  Download
                </Button>
              </div>
            </div>
            <Heading
              size="5xl"
              as="h2"
              className="absolute bottom-[30%] left-[10%] z-[3] m-auto w-[38%] !font-roboto leading-[57px] !text-white-A700"
            >
              <>
                Sobha One Detailed
                <br />
                Brochure
              </>
            </Heading>
            <div className="absolute bottom-[16%] right-[6%] z-[4] m-auto h-[481px] w-[37%] md:h-auto">
              <Img src="images/img_599eb2080cad100.png" alt="profile image" className="h-[481px] w-full object-cover" />
              <div className="absolute bottom-[13%] right-[16%] m-auto flex flex-col items-end gap-[5px]">
                <div className="flex bg-gray-900_02">
                  <Text size="4xl" as="p" className="!text-[23.63px] !font-normal !text-white-A700">
                    Milana
                  </Text>
                </div>
                <div className="flex self-center bg-gray-900_02">
                  <Text size="lg" as="p" className="!text-white-A700">
                    Real estate advisor
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* customer testimonials section */}
          <div className="mt-[104px] flex w-[84%] md:w-full md:p-5">
            <div className="flex w-full flex-col items-start">
              <Button color="gray_50_01" size="xs" shape="square" className="min-w-[185px] font-bold">
                CUSTOMER TESTIMONIAL
              </Button>
              <Heading size="4xl" as="h2" className="ml-1.5 mt-6 !font-rubik !text-green-500 md:ml-0">
                People say about us?
              </Heading>
              <div className="mr-[9px] mt-8 flex items-center gap-2.5 self-end md:mr-0">
                <a href="#">
                  <Heading size="xs" as="h3" className="!font-roboto !font-semibold !text-teal-300">
                    Learn More
                  </Heading>
                </a>
                <Img src="images/img_arrow_09368bac_svg.svg" alt="arrow image" className="h-[20px] w-[20px]" />
              </div>
              <div className="ml-[15px] mt-[13px] flex gap-[13px] self-stretch md:ml-0 md:flex-col">
                {data2.map((d, index) => (
                  <DesktopOneBorder {...d} key={"listBorders" + index} className="pb-[18px] pl-[18px]" />
                ))}
              </div>
            </div>
          </div>

          {/* economic appeal section */}
          <div className="mt-[103px] flex flex-col items-center self-stretch pb-[37px] pt-[17px] sm:pb-5">
            <div className="flex w-[80%] justify-center pb-6 md:w-full md:p-5 sm:pb-5">
              <div className="container-xs flex justify-center pl-[341px] pr-[363px] md:px-5">
                <Text size="7xl" as="p" className="!font-ibmplexserif">
                  <span className="font-poppins text-black-900">Economic</span>
                  <span className="font-poppins text-light_blue-A100">&nbsp;</span>
                  <span className="font-poppins text-green-500">Appeal</span>
                </Text>
              </div>
            </div>
            <div className="flex w-[80%] flex-col md:w-full md:p-5">
              <div className="pb-10 pl-[5px] sm:pb-5">
                <Text size="5xl" as="p" className="text-center !font-normal leading-9">
                  <>
                    DAMAC Lagoons aims to cater to families with children due to a large number of local
                    <br />
                    nurseries, schools, and mosques, which are included in the development’s master.
                  </>
                </Text>
              </div>
              <div className="container-xs relative mt-[-22px] pl-[25px] pr-[39px] sm:px-5">
                <Text as="p" className="text-center leading-7">
                  <>
                    Additionally, the area will house a regional mall that will cover an area of two million sq. ft.,
                    which is slightly larger than the well-
                    <br />
                    known Mall of the Emirates. DAMAC Lagoons will have a huge D-shaped lazy river situated in the
                    centre of the residences, which will
                    <br />
                    provide plenty of entertainment for adults and children.
                  </>
                </Text>
              </div>
            </div>
            <div className="container-xs pl-[31px] pr-[55px] md:p-5 md:pr-5 sm:px-5">
              <div className="flex flex-col items-center">
                <Text as="p" className="w-full text-center !font-manrope leading-7">
                  <>
                    Property owners will have access to amenities in other clusters of the complex. For example, women
                    living in any cluster will be able
                    <br />
                    to visit ladies-only gyms, spas, and meditation lounges. The Play & Learn Hub will be an ideal place
                    for children to play and learn new
                    <br />
                    things through a sensory plaza, interactive water attractions, outdoor art exhibits, and an
                    Augmented Reality (AR) nature trail.
                  </>
                </Text>
                <Button className="relative mt-[23px] min-w-[280px] rounded-[24px] sm:px-5">Invest with DAMAC</Button>
              </div>
            </div>
          </div>

          {/* cryptocurrency payment section */}
          <div className="mt-5 self-stretch pb-[26px] pr-[17px] pt-11 md:pt-5 sm:py-5">
            <div className="flex flex-col items-center">
              <div className="container-xs flex flex-col items-center pl-[259px] pr-[273px] md:p-5 md:px-5">
                <Text size="8xl" as="p">
                  Now Accepting
                </Text>
                <Text
                  size="6xl"
                  as="p"
                  className="mr-[60px] mt-[41px] inline self-end text-center !font-ibmplexserif !text-colors underline md:mr-0"
                >
                  <span className="font-poppins text-green-500">Cryptocurrency</span>
                  <span className="font-poppins text-black-900">&nbsp;Payments</span>
                </Text>
                <div className="mt-[19px] flex w-[54%] items-start justify-between gap-5 md:w-full">
                  <Img src="images/img_svg.svg" alt="svg image" className="h-[128px] w-[31%]" />
                  <Img src="images/img_1175229_eth_eth.svg" alt="ethereum image" className="h-[123px] w-[31%]" />
                </div>
              </div>
              <div className="mt-[41px] flex w-[96%] justify-center md:w-full md:p-5">
                <div className="container-xs flex justify-center pl-[326px] pr-[323px] md:px-5">
                  <Text size="6xl" as="p" className="flex !font-ibmplexserif">
                    <span className="font-poppins text-black-900">Our&nbsp;</span>
                    <a href="#" className="font-poppins text-green-500 underline">
                      Experts
                    </a>
                    <span className="font-poppins text-black-900">&nbsp;will help</span>
                  </Text>
                </div>
              </div>
              <div className="relative h-[114px] self-stretch">
                <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-[96%] justify-center">
                  <div className="container-xs flex justify-center pl-[268px] pr-[264px] md:p-5 md:px-5">
                    <Text size="6xl" as="p" className="flex !font-ibmplexserif">
                      <span className="font-poppins text-black-900">you get the best&nbsp;</span>
                      <a href="#" className="font-poppins text-green-500 underline">
                        ROI
                      </a>
                      <span className="font-poppins text-black-900">&nbsp;and</span>
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[-0.78px] left-0 right-0 m-auto flex w-[96%] justify-center">
                  <div className="container-xs flex justify-center pl-[338px] pr-[312px] md:p-5 md:px-5">
                    <Text size="6xl" as="p" className="!font-ibmplexserif !text-colors1 underline">
                      <span className="font-poppins text-green-500">Quality</span>
                      <span className="font-poppins text-black-900">&nbsp;with DAMAC</span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="container-xs mt-[49px] pl-[456px] pr-[427px] md:p-5 md:px-5">
                <Button className="w-full rounded-[24px] font-manrope sm:px-5">Send Request</Button>
              </div>

              {/* contact section */}
              <div className="container-xs mt-[74px] flex justify-center rounded-[16px] bg-green-500 py-8 pl-[23px] pr-1.5 shadow-md md:p-5 sm:py-5 sm:pl-5">
                <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[65%] items-start justify-center gap-[46px] md:w-full md:flex-col">
                    <div className="flex flex-col items-start">
                      <Heading size="xl" as="h2" className="!font-manrope !text-white-A700">
                        Or save your time
                      </Heading>
                      <Text as="p" className="!font-manrope !text-white-A700">
                        and get all info directly from our manager
                      </Text>
                    </div>
                    <Button
                      color="black_900"
                      size="lg"
                      className="min-w-[149px] rounded-[24px] font-manrope font-medium uppercase"
                    >
                      Request a call
                    </Button>
                    <div className="relative h-[50px] w-[26%] md:h-auto md:w-full">
                      <Button
                        color="white_A700"
                        leftIcon={<Img src="images/img_volume.svg" alt="volume" className="h-[14px] w-[14px]" />}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto min-h-[19px] w-max min-w-[173px] gap-4 rounded-[25px] border border-solid border-green-400 font-manrope sm:px-5"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-[25%] items-center justify-center gap-[7px] md:w-full">
                    <Img
                      src="images/img_image_80x80.png"
                      alt="profile image"
                      className="h-[80px] w-[80px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start gap-0.5">
                      <Text as="p" className="!font-manrope !text-white-A700">
                        Emma Harrison
                      </Text>
                      <Text size="lg" as="p" className="!font-manrope !font-thin !text-white-A700">
                        Real estate consultant with 8 years of experience
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* upcoming projects announcement section */}
              <div className="container-xs mt-[43px] pl-[218px] pr-[287px] md:p-5 md:px-5">
                <Text as="p" className="text-center !font-manrope leading-6">
                  3, 4 & 5BR Townhouses Coming Soon in A New Dubai&#39;s Community with Water Lagoon
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
