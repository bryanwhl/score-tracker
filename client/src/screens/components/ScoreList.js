import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ScoreList = () => {
  return (
    <List
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: '400px',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  )
}

export default ScoreList