import React from 'react'

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-800 p-4">
        <div>
          <label className="text-gray-400 text-sm">Thumbnail Title</label>
          <input
            type="text"
            placeholder="Get Sporty in Style"
            className="w-full bg-gray-700 p-2 mt-1 rounded"
          />
        </div>
        <div className="mt-4">
          <label className="text-gray-400 text-sm">Video Status</label>
          <div className="mt-1">
            <label className="mr-2">
              <input type="radio" name="status" className="mr-1" /> Active
            </label>
            <label>
              <input type="radio" name="status" className="mr-1" /> Inactive
            </label>
          </div>
        </div>
        <div className="mt-8">
          <label className="text-gray-400 text-sm">Product List</label>
          <div className="space-y-2 mt-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-700 p-2 rounded"
              >
                <img
                  src={`https://via.placeholder.com/50/FF0000/FFFFFF?text=Video+${
                    index + 1
                  }`}
                  alt="Video Thumbnail"
                  className="w-10 h-10 rounded"
                />
                <div>
                  <div>Video Title Name</div>
                  <div className="text-gray-400 text-xs">
                    Products Attached: 5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default SideBar