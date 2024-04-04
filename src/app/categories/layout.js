import CategoriesList from '@/components/ui/CatList/CatList';
import { Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({ children }) => {
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    <CategoriesList />
                </Grid>
                <Grid item xs={9}>
                    {children}
                </Grid>

            </Grid>
        </div>
    );
};

export default CategoriesLayout;