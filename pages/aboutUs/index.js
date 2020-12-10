import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TheFirm from "../../components/TheFirm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`about-us-tab-pabel-${index}`}
      aria-labelledby={`about-us-tab-pabel-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `about-us-tab-${index}`,
    "aria-controls": `about-us-tab-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    width: "100vw",
  },
  appBarRoot: {
    backgroundColor: "black",
  },
  tabsIndicator: {
    backgroundColor: "white",
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.appBarRoot }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabsChange}
          aria-label="about us tabs"
          variant="fullWidth"
          centered
          classes={{
            indicator: classes.tabsIndicator,
          }}
        >
          <Tab wrapped label="The Firm" {...a11yProps(0)} />
          <Tab wrapped label="The Experiences" {...a11yProps(1)} />
          <Tab wrapped label="The Mission and Vision" {...a11yProps(2)} />
          <Tab wrapped label="The Location" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={tabIndex} index={0}>
        <TheFirm />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        Item Twoff
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
