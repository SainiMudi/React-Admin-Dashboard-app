import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, TableChart, CalendarToday, Dashboard } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = ({ darkMode, setDarkMode }) => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/tables">
          <ListItemIcon><TableChart /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/kanban">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dark Mode" />
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
