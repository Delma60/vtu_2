import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { Box } from "@mui/material";
import Topbar from "./topbar";

const UserLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 3,
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
        className="w-[100vw]"
      >
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserLayout;
