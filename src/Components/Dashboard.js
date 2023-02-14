import { Card, CardHeader, Chip } from "@mui/material";
import React from "react";
import "../Styles/Dashboard.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function Dashboard() {
  return (
    <div className="main">
      <div style={{ marginTop: "10rem", margin: "10rem", marginLeft: "19rem" }}>
        <div className="row mt-5">
          <div className="col-xl-8 col-md-10">
            <div>
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

              <div className="row" style={{ marginTop: "3rem" }}>
                <div className="col-xl-7">
                  <Card>
                    <div className="sub-head">
                      <p>Managed by</p>
                      <Chip
                        icon={<FilterAltIcon />}
                        label="Filter"
                        FilterAltIcon
                        variant="outlined"
                      />
                    </div>
                    <hr />
                  </Card>
                </div>
                <hr />

                <div></div>

                <div className="col-xl-5">
                  {" "}
                  <Card>
                    <p>Lead Status</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-10">
            <Card>secnd</Card>
          </div>
        </div>
      </div>
    </div>
  );
}
