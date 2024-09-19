import React, { useState } from 'react';
import { Card, CardContent, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStore from '../store/Store';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export const TabsComponent = (props) => {

  const {language} = useStore();
    
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%',
            backgroundColor : 'transparent !important'
        }}>
            <AppBar position="static">
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label={props.label1 || "Description"} {...a11yProps(0)} sx={{textTransform : 'none',color : '#666666',borderRight : `${language == 'en' ? '2px solid #D9D9D9' : ''} `}} className='text-base font-bold'/>
                <Tab label={props.label2 || "Features"} {...a11yProps(1)} sx={{textTransform : 'none',color : '#666666',borderRight : '2px solid #D9D9D9'}} className='text-base font-bold'/>
                <Tab label={props.label3 || "Compare"} {...a11yProps(2)} sx={{textTransform : 'none',color : '#666666',borderRight : `${language == 'en' ? '' : '2px solid #D9D9D9'}`}} className='text-base font-bold'/>
            </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction} className="text-[#808080]">
                {props.text1 || "elit. Dicta dolor sit amet consectetur adipisicing elit. Dicta aspTemporibus exercitationem nulla minima reprehenderit impedit! Libero nemo voluptas vero quidem dolor cum, enim repudiandae vel ullam? ernatur vel magni alias aut tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci accusantium, voluptatem recusandae quaerat et ab quam. Dolor, modi eveniet."}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction} className="text-[#808080]">
                {props.text2 || "adipisicing ism dolor sit amet consectetur adipisicing eTemporibus exercitationem nulla minima reprehenderit impedit! Libero nemo voluptas vero quidem dolor cum, enim repudiandae vel ullam? lit. Quaerat perspiciatis optio facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sunt."}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction} className="text-[#808080]">
                {props.text3 || "sit amet consectetur adipisicing eTemporibus exercitationem nulla minima reprehenderit impedit! Libero nemo voluptas vero quidem dolor cum, enim repudiandae vel ullam? lit. Debitis, error officia dolores earum consectetur quod! Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </TabPanel>
        </Box>
    );
    
}
