import React from "react";
import { Menu, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MenuItem from './MenuItem'

const userMenus = [
    {
      name: "Profile",
      component: "Link",
      to: "/user/profile",
      variant: "contained",
      size: "small",
      color: "primary",
    },
    {
      name: "New Word",
      component: "Link",
      to: "/words/word/newword",
      variant: "contained",
      size: "small",
      color: "primary",
    },
    {
      name: "Logout",
      component: "Link",
      to: "/auth",
      variant: "contained",
      size: "small",
      color: "primary",
    },
    {
      name: "Words",
      component: "Link",
      to: "/words",
      variant: "contained",
      size: "small",
      color: "primary",
    },
  ];
const MenuList = ({ userMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AccountCircle />
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {
            userMenus.map(item => (
                <MenuItem item={item}/>
            ))
        }
      </Menu>
    </div>
  );
};

export default MenuList;
