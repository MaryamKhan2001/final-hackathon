import React from "react";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/building.png",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/car.png",
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/umbrella.png",
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];

  return (
    <div className="bg-white py-16 lg:py-20 mt-18">
      {/* Section Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Featured Posts</h2>
        <p className="text-lg lg:text-xl text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            {/* Post Image */}
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover" // Larger height for images
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-sm lg:text-base font-bold px-3 py-1 rounded">
                {post.tag}
              </span>
            </div>

            {/* Post Content */}
            <div className="p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base mt-4">{post.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm lg:text-base mt-6">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-sm lg:text-base font-medium mt-6 inline-block hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
