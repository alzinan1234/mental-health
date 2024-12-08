"use client";
import Appointment from "@/components/Appointment/Appointment";
import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import MentalHealth from "@/components/mentalHealth/MentalHealth";
import Need from "@/components/need/Need";
import Service from "@/components/service/Service";

const page = () => {
  return (
    <div>
      <Banner />
      <MentalHealth />
      <Need />
      <Appointment />
      <Blog />
      <Service />
    </div>
  );
};

export default page;
