"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import Link from 'next/link';
import {   TableContainer, Typography } from '@mui/material';

const navItems = [
    {
        route: 'Home',
        pathname: '/'
    },
    {
        route: 'Pages',
        pathname: '/pages'
    },
    {
        route: 'Category',
        pathname: '/category'
    },
    {
        route: 'News',
        pathname: '/news'
    },
    {
        route: 'About',
        pathname: '/about'
    },
    {
        route: 'Contact',
        pathname: '/contact'
    },
];

function Footer() {


    return (

        <Box className="bg-black px-2 py-10">
            <TableContainer>
                <Box sx={{
                    '& svg': {
                        color: "white"
                    }
                }} className='gap-2 text-center' direction="row">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </Box>

                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'> {item.route} </Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant="body1" textAlign="center" color="white">
                    © 2022 Your Company Name. All rights reserved.
                </Typography>

            </TableContainer>
        </Box>




    );
}
export default Footer;