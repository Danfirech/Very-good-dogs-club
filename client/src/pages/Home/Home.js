import React from "react";
import { useQuery } from "@apollo/client";

// import Header from "../../components/header/Header";
import Post from "../../components/Post/Post";
import Sidebar from "../../components/SideBar/SideBar";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
}
