import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export function DrawerList() {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListSubheader>Shop By Category</ListSubheader>
        {[
          'Clothing',
          'Shoes',
          'Jewelry',
          'Watches',
          'Electronics',
          'Music',
          'Games',
          'Sports',
          'Books',
          'Luggage',
          'Toys',
          'Groceries',
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Help &amp; Settings</ListSubheader>
        <ListItem button>
          <ListItemText primary="Your Account" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Customer Service" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </Box>
  );
}
