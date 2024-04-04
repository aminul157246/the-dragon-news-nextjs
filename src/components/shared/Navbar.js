"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import logo from '@/assets/images/logo.png'
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import Link from 'next/link';
import { Stack } from '@mui/material';
import Header from './Header';

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

function Navbar() {


    return (
       <>
        <Header></Header>
        <AppBar position="static" className='bg-black mt-4'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Image src={logo} width={100} height={100} alt="logo" />

                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className='text-white'> {item.route} </Button>
                            </Link>
                        ))}
                    </Box>

                    <Stack sx={{
                        '& svg' : {
                            color : "white"
                        }
                    }} className='gap-2' direction="row">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
       </>
    );
}
export default Navbar;