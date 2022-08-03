import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { courses } from './courseInfo';
import { selectorStyles } from './selectorStyles';
import { useNavigate } from 'react-router-dom';

const CourseSelector = () => {
  const navigate = useNavigate();

  return (
    <Drawer
        sx={selectorStyles.drawer}
        variant="permanent"
        anchor="left"
    >
      <List sx={selectorStyles.list}>
        {courses.map((item, index) => (
          <ListItem 
            sx={selectorStyles.listitem}
            button 
            key={item.id}
            onClick ={ () => navigate(item.route)}
          >
            <ListItemIcon 
              sx={selectorStyles.icons}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              sx={selectorStyles.text}
              primary={item.label} 
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default CourseSelector