import PrimarySearchAppBar from "./Components/Header";
import CustomCard from "./Card/CustomCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormDialog from "./Components/Formdialogue";
import { useState } from "react";
import { ImportExport } from "@material-ui/icons";
import  React , {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
    <PrimarySearchAppBar/>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4} sm={6} xs={12} >
            <CustomCard />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <CustomCard />
          </Grid>
          <Grid item md={4} sm={6} xs={12} >
            <CustomCard />
          </Grid>
          <Grid item md={4} sm={6} xs={12} >
            <CustomCard />
          </Grid>
          <Grid item md={4} sm={6} xs={12} >
            <CustomCard />
          </Grid>
          <Grid item md={4} sm={6} xs={12} >
            <CustomCard />
          </Grid>
        </Grid>
        <FormDialog />
      </Container>
    </div>
  );
}

export default App;
