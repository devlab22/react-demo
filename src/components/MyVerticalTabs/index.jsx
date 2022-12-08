import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {GridView} from '../../components';

function TabPanel(props) {
  const { children, value, index, link, ...other } = props;

  return (
    <div
      widht="100%"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
     {/*  {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )} */}

      
       {children}  
      
    </div>
  );
}

export default function VerticalTabs({items=[], onClick}) {

  const [value, setValue] = React.useState(null);
  const [myTabs, setMyTabs] = React.useState([]);
  const [item, setItem] = React.useState({})

  React.useEffect(() => {

    setMyTabs(items)
  }, [items])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //onClick(newValue)
    const item = items.filter(item => item.id === newValue)[0]
    setItem(item)
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", widht: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >

        {myTabs.map(item => (

          <Tab key={item.id} label={item.name} />
        ))}

      </Tabs>

      <TabPanel 
        index={item.id}
        value={item.id}
        >
          {item.component}
          </TabPanel>

    </Box>
  );
}

