import Image from "next/image";
import frame from "../image/banner/Frame.svg";

const MentalHealth = () => {
  const mental = [
    {
      id: 1,
      image: frame,
      title: "Sunset Bliss",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
    {
      id: 2,
      image: frame,
      title: "Mountain Escape",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
    {
      id: 3,
      image: frame,
      title: "City Lights",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
    {
      id: 4,
      image: frame,
      title: "Forest Serenity",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
    {
      id: 5,
      image: frame,
      title: "Sunset Bliss",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
    {
      id: 6,
      image: frame,
      title: "Mountain Escape",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
    {
      id: 7,
      image: frame,
      title: "City Lights",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
    {
      id: 8,
      image: frame,
      title: "Forest Serenity",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id ac ac sed nisl dignissim.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-12">
        Various mental health <br /> conditions are treated by us.
      </h1>
      <div className="max-width mx-auto px-4 py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px]">
          {mental.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md md:w-[344px] md:p-[24px]  rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="md:w-[95px] md:h-[95px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-[25px] font-bold mb-2">{item.title}</h2>
                <p className="text-[#9C9C9C] text-[18px] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>this is mantal health </h1>
      </div>
    </section>
  );
};

export default MentalHealth;
