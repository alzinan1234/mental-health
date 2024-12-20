"use client";
import Appointment from "@/components/Appointment/Appointment";
import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import Faq from "@/components/faq/Faq";

import MentalHealth from "@/components/mentalHealth/MentalHealth";
import Need from "@/components/need/Need";
import Newsletter from "@/components/news/Newsletter";
import Service from "@/components/service/Service";
import Testimonial from "@/components/testimonial/Testimonial";

const page = () => {
  return (
    <div>
      <Banner />
      <MentalHealth />
      <Need />
      <Appointment />
      <Blog />
      <Service />
      <Testimonial />
      <Faq />
      <Newsletter />
    </div>
  );
};

export default page;
