// src/components/Header.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#141414",
  border: "1px solid white",
  "&:hover": {
    backgroundColor: "#1c1c1c",
  },
  width: "auto",
  marginLeft: theme.spacing(2),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    backgroundColor: "transparent",
  },
}));

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#141414" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ isplay: "flex", color: "red" }}>
          NETFULIX
        </Typography>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Button color="inherit">ホーム</Button>
          <Button color="inherit">テレビ番組・ドラマ</Button>
          <Button color="inherit">映画</Button>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder=""
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <IconButton color="inherit" sx={{ marginLeft: 2 }}>
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
