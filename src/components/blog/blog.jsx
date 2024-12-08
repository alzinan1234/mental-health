import chane1 from "../image/blog/Chane image.png";
import chane2 from "../image/blog/Chane image (2).png";
import chane3 from "../image/blog/Chane image (1).png";
import avtar from "../image/blog/avater-image.png";

const Blog = () => {
  const data = [
    {
      category: "Anger",
      role: "Patient",
      title:
        "Cultivating Resilience: Building Inner Strength to Overcome Life's Challenges",
      description:
        "Life is filled with ups and downs, and building resilience is essential for navigating through challenges. Resilience is the ability",
      author: {
        name: "Jon Doe",
        role: "Patient",
        image: avtar,
      },
      image: chane1,
    },
    {
      category: "Stress",
      role: "Patient",
      title: "Managing Stress: Techniques for a Calmer Mind",
      description:
        "Stress is a common part of life. Learn techniques to manage it effectively and bring peace to your mind and body.",
      author: {
        name: "Jane Smith",
        role: "Patient",
        image: avtar,
      },
      image: chane2,
    },
    {
      category: "Anxiety",
      role: "Therapist",
      title: "Overcoming Anxiety: Strategies for a Better Life",
      description:
        "Anxiety can be overwhelming. Discover ways to reduce anxiety and improve your quality of life.",
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
      </div>
    </>
  );
};

export default Blog;
