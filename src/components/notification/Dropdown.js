import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Dropdown = ({ anchorEl, handleClose, open, notification }) => {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            {notification.label}
        </MenuItem>
      </Menu>
 
    )
}

export default Dropdown