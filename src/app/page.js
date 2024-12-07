import Appointment from "@/components/Appointment/Appointment";
import Banner from "@/components/banner/Banner";
import MentalHealth from "@/components/mentalHealth/MentalHealth";
import Need from "@/components/need/Need";

const page = () => {
  return (
    <div>
      <Banner />
      <MentalHealth />
      <Need />
      <Appointment />
    </div>
  );
};

export default page;
