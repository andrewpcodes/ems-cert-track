import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dropdown from "./Dropdown";

const Notification = (certDate) => {
  const [open, setOpen] = React.useState(false);
  const [anchorel, setanchorel] = React.useState(null);
  const today = new Date();

  const todaysDate = {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  };

  const certExpires = {
    day: certDate.certDate.getDate(),
    month: certDate.certDate.getMonth() + 1,
    year: certDate.certDate.getFullYear() + 2,
  };

  const yearsLeft = certExpires.year - todaysDate.year;
  const monthsLeft =
    yearsLeft > 0
      ? yearsLeft * 12 + (certExpires.month - todaysDate.month)
      : certExpires.month - todaysDate.month;

  const withinMonth = 1 >= monthsLeft ? true : false;

  console.log(yearsLeft, monthsLeft, withinMonth);

  const notifications = withinMonth
    ? {
        id: 1,
        label: "Your certification is expiring soon!",
      }
    : {
        id: 0,
        label: "",
      };

  const newNotifications = `You have 1 new notification`;
  const noNotifications = "No new notifications";

  const handleOpen = (event) => {
    setanchorel(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ float: "right", padding: "6px" }}>
      <Tooltip
        title={notifications.id === 1 ? newNotifications : noNotifications}
      >
        <IconButton
          onClick={notifications.id === 1 ? handleOpen : null}
          anchorel={anchorel}
        >
          <Badge
            badgeContent={notifications.id === 1 ? notifications.id : null}
            color="error"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Dropdown
        open={open}
        anchorEl={anchorel}
        handleClose={handleClose}
        notification={notifications}
      />
    </div>
  );
};

export default Notification;
