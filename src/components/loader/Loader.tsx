import React, { FC } from 'react';
import classes from './Loader.module.css'

const Loader: FC = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}} className={classes.loader} />
    );
};

export default Loader;