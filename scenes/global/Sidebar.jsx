import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/style.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ProfileOutlinedIcon from "@mui/icons-material/ProfileOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarOutlinedIcon from "@mui/icons-material/CalendarOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MaplineOutlinedIcon from "@mui/icons-material/MaplineOutlined";
import { color } from "@mui/system";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens{theme.palette.mode};
  return (
    <MenuItem active={selected === title} style={{ color: colors.grey[100]}} onClick={()=> setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      {/* USER */}
      {!isCollapsed && (
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={"../../assets/user.png"}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontweight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              Matteo
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              React Developer
            </Typography>
          </Box>
        </Box>
      )}

      {/* MENU ITEMS*/}
      <Box paddingLeft={isCollapsed ? undefined : "10px"}>
        <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography>

        </Typography>
        <Item
          title="Profile"
          to="/profile"
          icon={<ProfileOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Contact Information"
          to="/contacts"
          icon={<ContactOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Invoice Balances"
          to="/receipt"
          icon={<ReceiptOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Person"
          to="/person"
          icon={<PersonOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Calendar"
          to="/calendar"
          icon={<CalendarOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="FAQ"
          to="/help"
          icon={<HelpOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Bar Chart"
          to="/barChart"
          icon={<BarChartOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Pie Chart"
          to="/pie"
          icon={<PieChartOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Line Chart"
          to="/line"
          icon={<TimelineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Menu"
          to="/menu"
          icon={<MenuOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Geography"
          to="/geography"
          icon={<MaplineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
