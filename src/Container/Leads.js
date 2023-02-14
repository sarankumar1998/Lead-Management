import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import "../Styles/Leads.css";
import { FilterAlt } from "@mui/icons-material";

const Leads = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const emptyData = [
    {
      Id: 1,
      Opportunity: "Opportunity",
      Client: "Cilent",
      Managedby: "Ijas",
      ETA: 444,
      OverDueAmount: 2555,
    },
    {
      Id: 2,
      Opportunity: "Nippon",
      Client: "Cilent",
      Managedby: "Dhanish",
      ETA: 444,
      OverDueAmount: 2555,
    },
    {
      Id: 3,
      Opportunity: "Alphabet",
      Client: "Cilent",
      Managedby: "Saran",
      ETA: 444,
      OverDueAmount: 2555,
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1%",
          marginTop: "2%",
        }}
      >
        <div>Leads</div>
        <div
          style={{
            marginRight: "2%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
          className="report_input_div"
        >
          <input
            placeholder="Search"
            // onChange={(e) => setFilters(e.target.value)}
          />
          <IconButton className="search_icon" sx={{ cursor: "pointer" }}>
            <SearchIcon
              sx={{
                color: "#000000",
                display: "flex",
                justifyContent: "right",
              }}
            />
          </IconButton>
        </div>
      </div>
      <table className="table" style={{ fontSize: 12 }}>
        <thead>
          <tr style={{ color: "#000000" }}>
            <td>
              ID <FilterAlt />
            </td>
            <td
              // onClick={() => forPayableNameSorting("Opportunity")}
              style={{ cursor: "pointer" }}
            >
              OPPORTUNITY <FilterAlt />
            </td>
            <td>
              CLIENT <FilterAlt />
            </td>
            <td>
              MANAGED BY <FilterAlt />
            </td>
            <td>
              STATUS <FilterAlt />
            </td>

            <td>
              ETA <FilterAlt />
            </td>
            <td>
              TAGS <FilterAlt />
            </td>
          </tr>
        </thead>
        <tbody>
          {emptyData.length > 0 ? (
            emptyData.map((el) => {
              //   let redColor =
              //     el.Managedby <= 10 ? "red" : el.Managedby > 20 ? "orange" : "blue";
              return (
                <tr>
                  <td>{el.Id}</td>
                  <td>{el.Opportunity}</td>
                  <td>{el.Client}</td>
                  <td>{el.Managedby}</td>
                  <td>
                    <select
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      <option value="Hot">Hot</option>
                      <option value="Warm">Warm</option>
                      <option value="Cold">Cold</option>
                    </select>{" "}
                  </td>
                  <td> {el.ETA}</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "8px",
                        background: "#000000",
                        color: "#fff",
                      }}
                    >
                      {"Tags"}
                    </button>{" "}
                    <button
                      style={{
                        borderRadius: "8px",
                        background: "#000000",
                        color: "#fff",
                      }}
                    >
                      {"More Tags"}
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{
                          background: "#000000",
                          color: "#fff",
                        }}
                      >
                        12
                      </span>
                    </button>{" "}
                  </td>
                </tr>
              );
            })
          ) : (
            <p style={{ position: "absolute", left: "50%", color: "red" }}>
              **NO DATA FOUND**
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Leads;
