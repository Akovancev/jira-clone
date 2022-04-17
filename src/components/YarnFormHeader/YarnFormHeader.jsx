import React from 'react';
import { Typography } from '@mui/material';

const typograhyStyle = {
    textAlign: 'center',
    marginTop: 40,
    borderBottom: '4px black solid',
    height: 60
};

export default function YarnFormHeader({ label }) {
    return (
        <>
            <Typography variant='h3' style={typograhyStyle} fullWidth>
                Yard
            </Typography>
            <Typography variant='h4' style={{ textAlign: 'center', marginTop: 20 }} fullWidth>
                {label}
            </Typography>
        </>
    )

}