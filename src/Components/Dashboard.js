import { Card, CardHeader, Chip } from "@mui/material";
import React from "react";
import "../Styles/Dashboard.css";
import HSBar from "react-horizontal-stacked-bar-chart";
import DonutChart from "react-donut-chart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dashboard() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const data = [
    {
      stat: "Prospect",
    },
    {
      stat: "Qualified",
    },
    {
      stat: "Proposals",
    },
    {
      stat: "Negotiations",
    },
    {
      stat: "Final sales",
    },
    {
      stat: "Awaiting Acceptance",
    },
    {
      stat: "Lost",
    },
    {
      stat: "Won",
    },
  ];
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#6af790",
    "#47f5ec",
    "#e7f211",
    "#2fa61c",
  ];
  const funnel = [
    "15rem",
    "14rem",
    "13rem",
    "12rem",
    "11rem",
    "10rem",
    "7rem",
    "6rem",
  ];
  const mar = [
    "8px",
    "15px",
    "24px",
    "30px",
    "40px",
    "50px",
    "70px",
    "77px",
  ];
  const reactDonutChartdata = [
    {
      label: "Hot",
      value: 25,
      color: "#00E396",
    },
    {
      label: "Cold",
      value: 65,
      color: "#FEB019",
    },
    {
      label: "Warm",
      value: 100,
      color: "#FF4560",
    },
  ];

  const reactDonutChartBackgroundColor = [
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
  ];
  const reactDonutChartInnerRadius = 0.5;
  const reactDonutChartSelectedOffset = 0.04;
  const reactDonutChartHandleClick = (item, toggled) => {
    if (toggled) {
      console.log(item);
    }
  };
  let reactDonutChartStrokeColor = "#FFFFFF";
  const reactDonutChartOnMouseEnter = (item) => {
    let color = reactDonutChartdata.find((q) => q.label === item.label).color;
    reactDonutChartStrokeColor = color;
  };

  return (
    <div className="main">
      
      <div style={{ marginTop: "10rem", margin: "10rem", marginLeft: "6rem" }}>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <div className="row mt-5">
          <div className="col-xl-9 col-md-10">
            <div className="row">
              <div className="col-xl-3">
       
                <Card>
                  <div className="card-one">
                    <p>Leads Converted</p>
                    <h1>3,299</h1>
                  </div>
                </Card>
              </div>

              <div className="col-xl-3">
                <Card>
                  <div className="card-two">
                    <p>New Converted</p>
                    <h1>2,728</h1>
                  </div>
                </Card>
              </div>

              <div className="col-xl-3">
                <Card>
                  <div className="card-three">
                    <p>Active Converted</p>
                    <h1>1,729</h1>
                  </div>
                </Card>
              </div>

              <div className="col-xl-3">
                <Card>
                  <div className="card-four">
                    <p>Inactive Converted</p>
                    <h1>4,927</h1>
                  </div>
                </Card>
              </div>
            </div>
            <div style={{ width: "70rem" }}></div>

            <div className="row" style={{ marginTop: "3rem" }}>
              <div className="col-xl-7">
                <Card style={{ background: "#f7f7f5" }}>
                  <div className="sub-head" style={{ marginTop: "2rem" }}>
                    <p className="stackedOwners">Managed by</p>
                    <Chip
                      icon={<FilterAltIcon />}
                      label="Filter"
                      FilterAltIcon
                      variant="outlined"
                    />
                  </div>
                  <hr />
                  <div
                    style={{
                      padding: "1rem",
                      overflow: "auto",
                      height: "12.7rem",
                    }}
                  >
                    <p className="stackedOwners">Nihal</p>
                    <HSBar
                      fontColor="rgb(50,20,100)"
                      showTextIn
                      id="new_id"
                      data={[
                        {
                          // name: 9,
                          value: 8000,
                          description: "9",
                          color: "#8cd1b5",
                        },
                        {
                          value: 5000,
                          description: "5",
                          color: "#d8f2b6",
                        },
                        { value: 3000, description: "3", color: "#f2d2b6" },
                      ]}
                    />

                    <p className="stackedOwners">Nihal</p>
                    <HSBar
                      fontColor="rgb(50,20,100)"
                      showTextIn
                      id="new_id"
                      data={[
                        {
                          // name: 9,
                          value: 8000,
                          description: "9",
                          color: "#8cd1b5",
                        },
                        {
                          value: 5000,
                          description: "5",
                          color: "#d8f2b6",
                        },
                        { value: 3000, description: "3", color: "#f2d2b6" },
                      ]}
                    />
                    <p className="stackedOwners">Nihal</p>
                    <HSBar
                      fontColor="rgb(50,20,100)"
                      showTextIn
                      id="new_id"
                      data={[
                        {
                          // name: 9,
                          value: 8000,
                          description: "9",
                          color: "#8cd1b5",
                        },
                        {
                          value: 5000,
                          description: "5",
                          color: "#d8f2b6",
                        },
                        { value: 3000, description: "3", color: "#f2d2b6" },
                      ]}
                    />
                    <p className="stackedOwners">Nihal</p>
                    <HSBar
                      fontColor="rgb(50,20,100)"
                      showTextIn
                      id="new_id"
                      data={[
                        {
                          // name: 9,
                          value: 8000,
                          description: "9",
                          color: "#8cd1b5",
                        },
                        {
                          value: 5000,
                          description: "5",
                          color: "#d8f2b6",
                        },
                        { value: 3000, description: "3", color: "#f2d2b6" },
                      ]}
                    />
                    <p className="stackedOwners">Nihal</p>
                    <HSBar
                      fontColor="rgb(50,20,100)"
                      showTextIn
                      id="new_id"
                      data={[
                        {
                          // name: 9,
                          value: 8000,
                          description: "9",
                          color: "#8cd1b5",
                        },
                        {
                          value: 5000,
                          description: "5",
                          color: "#d8f2b6",
                        },
                        { value: 3000, description: "3", color: "#f2d2b6" },
                      ]}
                    />
                  </div>
                </Card>
              </div>
              <hr />

              <div className="col-xl-5">
                {" "}
                <Card style={{ background: "#f7f7f5" }}>
                  <p className="stackedOwners" style={{ padding: "1rem" }}>
                    Lead Status
                  </p>
                  <div className="mt-3">
                    <DonutChart
                      width={300}
                      height={230}
                      onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
                      strokeColor={reactDonutChartStrokeColor}
                      data={reactDonutChartdata}
                      colors={reactDonutChartBackgroundColor}
                      innerRadius={reactDonutChartInnerRadius}
                      selectedOffset={reactDonutChartSelectedOffset}
                      onClick={(item, toggled) =>
                        reactDonutChartHandleClick(item, toggled)
                      }
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-10">
            <Card style={{ padding: "1rem",height:'51vh', background: "#f7f7f5"  }}>
            <p className="stackedOwners" style={{marginTop:'1%', marginRight:"1rem"}}>
                    Lead Funnel
                  </p>
              <div style={{}}>
                {data.map((e, i) => (
                  <p
                    style={{
                      background: colors[i],
                      marginLeft: mar[i],
                      width: funnel[i],
                      padding: "5px",
                      border: "2px",
                      borderRadius: "25px",
                    }}
                    key={i}
                  >
                    {e.stat}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
