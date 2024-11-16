// src/components/Header.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { FaFaceGrinSquint } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../assets/css/CssItems";

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
        <IconButton color="inherit" sx={{ marginLeft: 2 }}>
          <FaFaceGrinSquint />
          <IoMdArrowDropdown />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
