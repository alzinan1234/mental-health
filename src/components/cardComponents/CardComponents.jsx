import Image from "next/image";

const CardComponents = ({ data }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src={data.image}
          alt={data.title}
          width={600}
          height={400}
          className="w-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
          {data.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="material-icons-outlined mr-2">access_time</span>
          {data.role}
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{data.description}</p>
        <div className="flex items-center mt-4">
          <Image
            src={data.author.image}
            alt={data.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">
              {data.author.name}
            </p>
            <p className="text-sm text-gray-500">{data.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
