import Appointment from "@/components/Appointment/Appointment";
import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import MentalHealth from "@/components/mentalHealth/MentalHealth";
import Need from "@/components/need/Need";

const page = () => {
  return (
    <div>
      <Banner />
      <MentalHealth />
      <Need />
      <Appointment />
      <Blog />
    </div>
  );
};

export default page;
