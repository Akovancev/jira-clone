import React from 'react';
import { TextField } from '@mui/material';

const style = {
    marginTop: 20,
}

export default function InputFields({ config }) {
    return config.map((fieldProps) => (
        <TextField
            style={style}
            fullWidth
            {...fieldProps}
        />
    ))
}