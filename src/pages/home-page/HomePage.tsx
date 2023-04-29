import { Carousel } from "antd";
import React, { FC } from "react";
import ImageCarousel from "../../component/Image-carousel/ImageCarousel";

const HomePage: FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} style={{ width: "100%", height: "100%" }}>
      <ImageCarousel
        src="https://img1.akspic.ru/crops/8/5/3/8/88358/88358-stolica-ulica-shoping-sluzhba_zakazchika-gorod-3840x2160.jpg"
        alt="banner 1"
      />{" "}
      <ImageCarousel
        src="https://img1.akspic.ru/crops/5/9/4/6/86495/86495-metropoliya-gorodskoj_pejzazh-orientir-noch-delovoj_rajon-3840x2160.jpg"
        alt="banner 2"
      />{" "}
      <ImageCarousel
        src="https://img1.akspic.ru/crops/3/9/5/6/86593/86593-sindzyuku-ulica-noch-peshehod-sosedstvo-3840x2160.jpg"
        alt="banner 3"
      />
    </Carousel>
  );
};

export default HomePage;
