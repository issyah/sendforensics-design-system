/**
 * Created By Issyah Ismail
 * @description: A reusable menu dropdown component. Built on top of MUI Menu and Button
 * 
**/ 
import {
  Button,
  Menu,
  MenuList,
  MenuItem,
  Box,
  Fade
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState, cloneElement } from 'react';
import Link from '../src/Link';
export default function MenuDropdown(props){
  const {
    label, 
    btnProps, 
    navLink, 
    dropdownData, 
    close,
    closeOnClick,
    ...newProps
  } = props;
  const [anchor,setAnchor] = useState(null);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  }
  const handleClose = () => {
    setAnchor(null);
  };
  



  const open = Boolean(anchor);
  const styled = (navLink) ? {
    backgroundColor: 'none',
    borderRadius: 0,
    borderBottomWidth: '2px',
    borderBottomStyle:'solid',
    borderBottomColor: 'transparent',
    fontWeight: 400,
    '&:hover' : {
      backgroundColor: 'transparent',
      borderBottomColor: 'primary.main'
    }
  } : {};
  return (
    <Box>
      <Button
        sx={styled}
        {...btnProps}
        endIcon={<ArrowDropDownIcon/>}
        onClick={handleClick}
      >{label}</Button>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        elevation={3}
        // transitionComponent={Fade}
      >
        <Box
          sx={{
            // minWidth:250,
            maxWidth:'100%',
            px:1,
          }}
          onClick={(closeOnClick) ? handleClose : undefined}
          {...props}
        />
        {/* </Box> */}
        {/* {dropdownData && (
          dropdownData.map((component, index) => 
            <React.Fragment 
              key={index}
            >
              {component}
            </React.Fragment>
          )
        )} */}
      </Menu>
    </Box>
  )
}