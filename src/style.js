const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-manrope font-normal text-text xs:text-[18px] text-[14px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetweenCenter: "flex md:justify-between justify-center items-center",
  flexBetweenStart: "flex md:justify-between justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-24 py-16",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImg: `flex-1 flex ${styles.flexCenter} relative`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter}  relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
