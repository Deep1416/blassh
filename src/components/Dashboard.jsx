import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import { getAllPlaylists } from "../utlis/helpers";
import { RiGalleryView2 } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
const Dashboard = () => {
  const [playlists, setPlaylists] = useState([]);
  const [posts, setPosts] = useState([]);
  const [up , setup] = useState(true)

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const playlistData = await getAllPlaylists();
        setPlaylists(playlistData); // Assuming playlistData is an array of playlists

        // Now, for each playlist, you might need to fetch corresponding feeds/posts
        const postIds = playlistData?.map((playlist) => playlist.PostId); // Adjust based on API response structure
        const feedsData = await getFeeds(postIds);
        setPosts(feedsData); // Assuming feedsData is the relevant feed information
        console.log(feedsData);
      } catch (error) {
        console.error("Error in fetching data", error);
      }
    };

    fetchPlaylists();
  }, []);
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <div className="text-2xl font-bold mb-8">blaash</div>
        <nav className="space-y-4">
          <div className="py-2">
            <button className="text-left w-full text-gray-400 flex items-center gap-2">
              <span>
                <RiGalleryView2 />
              </span>
              Revenue
            </button>
          </div>
          <div className="flex items-center ">
            <div className="py-2 text-gray-400 flex items-center gap-2 w-[70%]">
              <span>
                <BsImage />
              </span>
              Shoppable Video
            </div>
            <button className="text-left pl-4 text-gray-500 w-[30%]">
              <FaAngleDown />
            </button>
          </div>

          <div className="flex items-center ">
            <div className="py-2 text-gray-400 flex items-center gap-2 w-[70%]">
              <span>
                <BsImage />
              </span>
              Story
            </div>
            <button className="text-left pl-4 text-gray-500 w-[30%]">
              <FaAngleDown />
            </button>
          </div>
          <div className="flex items-center ">
            <div className="py-2 text-gray-400 flex items-center gap-2 w-[70%]">
              <span>
                <BsImage />
              </span>
              Live Commerce
            </div>
            <button className="text-left pl-4 text-gray-500 w-[30%]">
              <FaAngleDown />
            </button>
          </div>
         <div>
         <div className="flex items-center ">
            <div className="py-2 text-gray-400 flex items-center gap-2 w-[70%]">
              <span>
                <BsImage />
              </span>
              Playlist Manager
            </div>
            <button className="text-left pl-4 text-gray-500 w-[30%]">
              <FaAngleUp />
            </button>
          </div>
          {
            up && <div className="bg-gray-600 py-2 rounded-md w-[90%]">
              <button className="text-left w-full pl-4  text-black">Product playlist</button>
            </div>
          }
         </div>
          
          
          <div className="flex items-center">
            <div className="py-2 text-gray-400 flex items-center gap-2 ">
              <span className="inline w-6 h-6 rounded-md bg-gray-700"></span>
              One Click Post</div>
            
          </div>
          <div>
            <div className="py-2 text-gray-400 flex items-center gap-2">
              <span><FaCalendarDays /></span>
              Calendar</div>
           
          </div>
          <div>
            <div className="py-2 text-gray-400 flex items-center gap-2 ">
              <span><CiSettings /></span>
              Hire Influencer</div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <MainContent />

      {/* Sidebar Right */}
      <SideBar />
    </div>
  );
};

export default Dashboard;
