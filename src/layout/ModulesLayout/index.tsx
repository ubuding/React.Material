import React from "react";
import { TopBar } from "./components/TopBar";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  ButtonGroup,
  Container,
  Fab,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
export const ModulesLayout = ({ children }: any) => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="w-full h-full overflow-hidden">
      <Container maxWidth={false} className="overflow-hidden">
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Box sx={{ height: "100vh" }}>
              <div className="w-full h-full shadow-[0_0_10px_0_var(--mui-palette-grey-500)]">
                <TopBar />
                {children}
              </div>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ height: "100vh" }}>
              <div className="w-full h-full shadow-[0_0_10px_0_var(--mui-palette-grey-500)] relative">
                <div className="w-full overflow-hidden overflow-x-scroll">
                  <div className="w-fit">
                    <Tabs value="A">
                      <Tab value="A" label="A" />
                      <Tab value="B" label="B" />
                      <Tab value="C" label="C" />
                      <Tab value="D" label="D" />
                      <Tab value="D" label="D" />
                      <Tab value="D" label="D" />
                      <Tab value="D" label="D" />
                    </Tabs>
                  </div>
                </div>
                <div className="absolute bottom-3 left-0 w-full">
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction
                      label="home"
                      icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                      label="friend"
                      icon={<RestoreIcon />}
                    />
                    <Fab color="primary" aria-label="add" size="large">
                      <AddIcon />
                    </Fab>
                    <BottomNavigationAction
                      label="message"
                      icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                      label="mine"
                      icon={<LocationOnIcon />}
                    />
                  </BottomNavigation>
                </div>
              </div>
            </Box>
          </Grid>
          {/* 
          <Grid item xs={9}>
            <Box sx={{ height: "50vh" }}>
              <div className="w-full h-full shadow-[0_0_10px_0_var(--mui-palette-grey-500)]">
                <TopBar />
                {children}
              </div>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ height: "100vh" }}>
              <div className="w-full h-full shadow-[0_0_10px_0_var(--mui-palette-grey-500)]">
                22
              </div>
            </Box>
          </Grid> */}
          {/* <Grid item xs={4}>
            <Box sx={{ height: "100vh" }}>
              <div className="w-full h-full shadow-[0_0_10px_0_var(--mui-palette-grey-500)]">
                22
              </div>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ height: "100vh" }}>
              <div className="w-full h-full shadow-[0_0_10px_0_var(--mui-palette-grey-500)]">
                22
              </div>
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </div>
    //   <Grid container spacing={2}>
    //     <Grid xs={8} sx={{ p: 2, border: "1px dashed grey" }}>
    //       <Box>
    //         <TopBar />
    //         <div className="w-full h-full box-border px-4 overflow-hidden">
    //           {children}
    //         </div>
    //       </Box>
    //     </Grid>
    //     <Grid xs={4}>
    //       <Box />
    //     </Grid>
    //   </Grid>
  );
};
