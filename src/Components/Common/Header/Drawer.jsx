import { useState } from "react";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CommonNavlinks from './CommonNavlinks.jsx'

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="humburger" />
      </IconButton>
      <Drawer  anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <CommonNavlinks className={"mobileMenu"}/>
      </Drawer>
    </div>
  );
}
