
import headerImg from '@/assets/images/The Dragon News.png'
import { TableContainer, Typography } from '@mui/material';
import Image from 'next/image';
const Header = () => {
    return (
        <div>


            <TableContainer>
            <Image className='mx-auto mt-4' src={headerImg} width={400} height={400} alt="logo" />
            <Typography variant="body1" textAlign="center" color="gray">
                    © 2022 Your Company Name. All rights reserved.
                </Typography>
            </TableContainer>
            
        </div>
    );
};

export default Header;