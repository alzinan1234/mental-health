"use client";
import chane1 from "../image/blog/Chane image.png";

import chane2 from "../image/blog/Chane image (2).png";
import chane3 from "../image/blog/Chane image (1).png";
import avtar from "../image/blog/avater-image.png";
import CardComponents from "../cardComponents/CardComponents";

const Blog = () => {
  const data = [
    {
      category: "Personal Growth",
      role: "Personal Growth",
      title:
        "Navigating Social Anxiety: Strategies for Finding Comfort in Social Settings",
      description:
        "Social anxiety can be a challenging experience that affects many aspects of our lives. The fear of judgment and the pressure to perform",
      author: {
        name: "Jon Doe",
        role: "Patient",
        image: avtar,
      },
      image: chane1,
    },
    {
      category: "Relationship",
      role: "Patient",
      title:
        "The Healing Power of Creativity: Exploring Art Therapy for Mental Well-being",
      description:
        "Art has a unique way of expressing emotions and fostering healing, making art therapy a powerful tool for mental well-being. ",
      author: {
        name: "Jane Smith",
        role: "Patient",
        image: avtar,
      },
      image: chane2,
    },
    {
      category: "Anger",
      role: "Therapist",
      title:
        "Cultivating Resilience: Building Inner Strength to Overcome Life's Challenges",
      description:
        "Life is filled with ups and downs, and building resilience is essential for navigating through challenges. Resilience is the ability.",
      author: {
        name: "Sam Wilson",
        role: "Therapist",
        image: avtar,
      },
      image: chane3,
    },
  ];
  return (
    <>
      <div>
        <h1 className="md:text-[72px] text-[30px] text-center font-bold">
          Recent Blog
        </h1>

        <div className="py-[64px] max-width mx-auto  grid gap-[40px] sm:grid-cols-1 md:grid-cols-3">
          {data.map((item, index) => (
            <CardComponents key={index} data={item} />
          ))}
        </div>
        <div>
          <button className="md:text-[20px] md:font-semibold text-[#636363] border border-[#636363] p-[24px] rounded-[5px] md:flex items-center justify-center mx-auto mb-6">
            Book an Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
