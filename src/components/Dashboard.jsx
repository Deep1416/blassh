import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import { getAllPlaylists } from "../utlis/helpers";

const Dashboard = () => {
    const [playlists, setPlaylists] = useState([]);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPlaylists = async () => {
        try {
          const playlistData = await getAllPlaylists();
          setPlaylists(playlistData); // Assuming playlistData is an array of playlists
  
          // Now, for each playlist, you might need to fetch corresponding feeds/posts
          const postIds = playlistData?.map(playlist => playlist.PostId); // Adjust based on API response structure
          const feedsData = await getFeeds(postIds);
          setPosts(feedsData); // Assuming feedsData is the relevant feed information
          console.log(feedsData);
          
        } catch (error) {
          console.error('Error in fetching data', error);
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
            <button className="text-left w-full text-gray-400">
                <span></span>
                Revenue
                </button>
          </div>
          <div>
            <div className="py-2 text-gray-400">Shoppable Video</div>
            <button className="text-left w-full pl-4 text-gray-500">
              Product Playlist
            </button>
          </div>
          <div>
            <div className="py-2 text-gray-400">Story</div>
            <button className="text-left w-full pl-4 text-gray-500">...</button>
          </div>
          <div>
            <div className="py-2 text-gray-400">Live Commerce</div>
            <button className="text-left w-full pl-4 text-gray-500">...</button>
          </div>
          <div>
            <div className="py-2 text-gray-400">Playlist Manager</div>
            <button className="text-left w-full pl-4 text-gray-500">
              Product playlist
            </button>
          </div>
          <div>
            <div className="py-2 text-gray-400">One Click Post</div>
            <button className="text-left w-full pl-4 text-gray-500">...</button>
          </div>
          <div>
            <div className="py-2 text-gray-400">Calendar</div>
            <button className="text-left w-full pl-4 text-gray-500">...</button>
          </div>
          <div>
            <div className="py-2 text-gray-400">Hire Influencer</div>
            <button className="text-left w-full pl-4 text-gray-500">...</button>
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
