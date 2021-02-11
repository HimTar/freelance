import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "../Extra/TabPanel/TabPanel";

const data = {
  tabs: [
    {
      tabName: "Tab 1",
      codes: [
        { name: "Comm Code", code: "AAAAAAA" },
        { name: "Comm Code", code: "BBBBBBB" },
        { name: "Minimum Per Booking", code: "CCCCCCC" },
        { name: "Prez Code", code: "DDDDDDD" },
      ],
      columns: [
        { field: "effective", headerName: "Effective", width: 160 },
        { field: "posting", headerName: "Posting", width: 160 },
        { field: "card_number", headerName: "Card Number", width: 160 },
        { field: "description", headerName: "Description", width: 160 },
        { field: "amount", headerName: "Amount", width: 160 },
        { field: "normal_point", headerName: "Normal Point", width: 160 },
        { field: "extra_point", headerName: "Extra Point", width: 160 },
        {
          field: "campaign_eligibility",
          headerName: "Campaign Eligibility",
          width: 160,
        },
      ],
      rows: [
        {
          id: 1,
          effective: "18/10/20",
          posting: "18/10/20",
          card_number: "3242 4234 2424 3325",
          description: "Tobs Store for..",
          amount: 2500.0,
          normal_point: 125,
          extra_point: 625,
          campaign_eligibility: "Yes",
        },
        {
          id: 2,
          effective: "28/10/20",
          posting: "28/10/20",
          card_number: "3331 3205 2284 3325",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 325,
          extra_point: 325,
          campaign_eligibility: "Yes",
        },
        {
          id: 3,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "2743 22005 6584 1075",
          description: "Dummy Store for..",
          amount: 3000,
          normal_point: 515,
          extra_point: 235,
          campaign_eligibility: "Yes",
        },
      ],
    },
    {
      tabName: "Tab 2",
      codes: [
        { name: "Comm Code", code: "RTY7362" },
        { name: "Comm Code", code: "GAW2442" },
        { name: "Minimum Per Booking", code: "AQW1937" },
        { name: "Prez Code", code: "MWG5378" },
      ],
      columns: [
        { field: "effective", headerName: "Effective", width: 160 },
        { field: "posting", headerName: "Posting", width: 160 },
        { field: "card_number", headerName: "Card Number", width: 160 },
        { field: "description", headerName: "Description", width: 160 },
        { field: "amount", headerName: "Amount", width: 160 },
        { field: "normal_point", headerName: "Normal Point", width: 160 },
        { field: "extra_point", headerName: "Extra Point", width: 160 },
        {
          field: "campaign_eligibility",
          headerName: "Campaign Eligibility",
          width: 160,
        },
      ],
      rows: [
        {
          id: 1,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "4742 00005 4384 3025",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 125,
          extra_point: 625,
          campaign_eligibility: "Yes",
        },
        {
          id: 2,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "3741 01105 2384 0455",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 325,
          extra_point: 325,
          campaign_eligibility: "Yes",
        },
        {
          id: 3,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "2743 22005 6584 1075",
          description: "Dummy Store for..",
          amount: 4500.0,
          normal_point: 515,
          extra_point: 235,
          campaign_eligibility: "Yes",
        },
        {
          id: 4,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "1744 03005 3584 2345",
          description: "Dummy Store for..",
          amount: 6500.0,
          normal_point: 25,
          extra_point: 145,
          campaign_eligibility: "Yes",
        },
        {
          id: 5,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "0746 45305 1484 2145",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 325,
          extra_point: 251,
          campaign_eligibility: "Yes",
        },
        {
          id: 6,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "9747 24505 6184 5425",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 435,
          extra_point: 654,
          campaign_eligibility: "Yes",
        },
        {
          id: 7,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "4742 00005 4384 3025",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 125,
          extra_point: 625,
          campaign_eligibility: "Yes",
        },
        {
          id: 8,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "4742 00005 4384 3025",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 125,
          extra_point: 625,
          campaign_eligibility: "Yes",
        },
        {
          id: 9,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "3741 01105 2384 0455",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 325,
          extra_point: 325,
          campaign_eligibility: "Yes",
        },
        {
          id: 10,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "2743 22005 6584 1075",
          description: "Dummy Store for..",
          amount: 4500.0,
          normal_point: 515,
          extra_point: 235,
          campaign_eligibility: "Yes",
        },
        {
          id: 11,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "1744 03005 3584 2345",
          description: "Dummy Store for..",
          amount: 6500.0,
          normal_point: 25,
          extra_point: 145,
          campaign_eligibility: "Yes",
        },
        {
          id: 12,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "0746 45305 1484 2145",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 325,
          extra_point: 251,
          campaign_eligibility: "Yes",
        },
        {
          id: 13,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "9747 24505 6184 5425",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 435,
          extra_point: 654,
          campaign_eligibility: "Yes",
        },
        {
          id: 14,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "4742 00005 4384 3025",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 125,
          extra_point: 625,
          campaign_eligibility: "Yes",
        },
      ],
    },
    {
      tabName: "Tab 3",
      codes: [
        { name: "Comm Code", code: "PES2332" },
        { name: "Comm Code", code: "MAN1112" },
        { name: "Minimum Per Booking", code: "IEN4252" },
        { name: "Prez Code", code: "WXO2872" },
      ],
      columns: [
        { field: "effective", headerName: "Effective", width: 160 },
        { field: "posting", headerName: "Posting", width: 160 },
        { field: "card_number", headerName: "Card Number", width: 160 },
        { field: "description", headerName: "Description", width: 160 },
        { field: "amount", headerName: "Amount", width: 160 },
        { field: "normal_point", headerName: "Normal Point", width: 160 },
        { field: "extra_point", headerName: "Extra Point", width: 160 },
        {
          field: "campaign_eligibility",
          headerName: "Campaign Eligibility",
          width: 160,
        },
      ],
      rows: [
        {
          id: 1,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "4742 00005 4384 3025",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 125,
          extra_point: 625,
          campaign_eligibility: "Yes",
        },
        {
          id: 2,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "3741 01105 2384 0455",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 325,
          extra_point: 325,
          campaign_eligibility: "Yes",
        },
        {
          id: 3,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "2743 22005 6584 1075",
          description: "Dummy Store for..",
          amount: 4500.0,
          normal_point: 515,
          extra_point: 235,
          campaign_eligibility: "Yes",
        },
        {
          id: 4,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "1744 03005 3584 2345",
          description: "Dummy Store for..",
          amount: 6500.0,
          normal_point: 25,
          extra_point: 145,
          campaign_eligibility: "Yes",
        },
        {
          id: 5,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "0746 45305 1484 2145",
          description: "Dummy Store for..",
          amount: 2500.0,
          normal_point: 325,
          extra_point: 251,
          campaign_eligibility: "Yes",
        },
        {
          id: 6,
          effective: "08/10/20",
          posting: "08/10/20",
          card_number: "9747 24505 6184 5425",
          description: "Dummy Store for..",
          amount: 1500.0,
          normal_point: 435,
          extra_point: 654,
          campaign_eligibility: "Yes",
        },
      ],
    },
  ],
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DataDisplay() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          {data.tabs.map((tab, key) => {
            return <Tab label={tab.tabName} {...a11yProps(key)} key={key} />;
          })}
        </Tabs>
      </Paper>

      {data.tabs.map((tab, key) => {
        return (
          <TabPanel
            value={value}
            index={key}
            key={key}
            rows={tab.rows}
            codes={tab.codes}
            columns={tab.columns}
          />
        );
      })}
    </div>
  );
}
