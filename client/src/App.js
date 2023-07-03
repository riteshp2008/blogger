import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import blog from './images/blog.png';
const App =() => {
    return (
        <Container maxidth="lg">
                <AppBar position="static" color="inherit">
                    <Typography variant="h2" align="center">Blogger</Typography>
                    <img src={blog} alt="memories" height="300" /> 
                </AppBar>
        </Container>
    );
}

export default App;