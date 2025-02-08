import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

export default function OrderModal() {
  const [open, setOpen] = useState(false);

  const [count, setCount] = useState<number>(2);

  const anchor = "right";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  const list = () => (
    <Box
      sx={{
        width: {
          xs: 300,
          sm: 500,
          md: 700,
        },
      }}
      role="presentation"
      onClick={anchor}
      onKeyDown={anchor}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button onClick={() => setCount(count + 1)}>Add</Button>
        <Button onClick={() => setCount(count - 1)}>Remove</Button>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "flex",
        },
        justifyContent: {
          xs: "center",
          sm: "flex-start",
        },
        alignItems: {
          xs: "center",
          md: "flex-start",
        },
        marginLeft: {
          xs: "20px",
          md: "0px",
        },
      }}
    >
      <IconButton onClick={handleClickOpen}>
        <ShoppingCartIcon fontSize="medium" />

        <CartBadge badgeContent={count} color="primary" overlap="circular" />
      </IconButton>
      <Box>
        <Fragment key={anchor}>
          <Drawer anchor={anchor} open={open} onClose={handleClose}>
            {list()}
          </Drawer>
        </Fragment>
      </Box>
    </Box>
  );
}
