import React from "react";

const MainContent = () => {
  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 bg-gray-800 p-4">
        <div className="text-lg font-bold">Design Studio</div>
        <div className="flex space-x-4">
          <button className="text-base   rounded">
            Support Request
          </button>
          <button className=" rounded">
            Product Tour
          </button>
          <input
            type="text"
            placeholder="Search Project..."
            className="px-3 py-2 bg-gray-800 rounded border border-white"
          />
          <div className="flex items-center space-x-4">
            <img
              src="data:image/png;base64,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"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span>Leonardo</span>
          </div>
        </div>
      </div>

      {/* Product Playlists */}
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg relative">
            <img
              src={`https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+${
                index + 1
              }`}
              alt="Thumbnail"
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 bg-gray-700 p-1 rounded-full cursor-pointer">
              <span className="text-xs">...</span>
            </div>
            <div className="mt-4 text-lg">Product Playlists Name</div>
            <div className="text-gray-400 text-sm">5 Videos</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
