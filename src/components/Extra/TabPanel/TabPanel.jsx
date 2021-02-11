import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

import Codes from "../Codes/Codes";

import styles from "./TabPanel.module.css";

export default function TabPanel(props) {
  const [normal, setNormal] = useState(0);
  const [extra, setExtra] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEmi, setIsEmi] = useState(false);

  const { children, value, index, rows, columns, codes, ...other } = props;

  const handleSelected = ({ rowIds }) => {
    const indexes = rowIds.map((row) => parseInt(row) - 1);
    setSelectedRows(indexes);

    let newNormal = 0,
      newExtra = 0,
      newAmount = 0;

    if (rowIds === []) {
      setNormal(0);
      setExtra(0);
      setAmount(0);
      return;
    }

    rows.map((obj, key) => {
      if (rowIds.includes((key + 1).toString())) {
        newNormal += obj.normal_point;
        newExtra += obj.extra_point;
        newAmount += obj.amount;
      }
      return 0;
    });

    setNormal(newNormal);
    setExtra(newExtra);
    setAmount(newAmount);
  };

  useEffect(() => {
    setNormal(0);
    setExtra(0);
    setAmount(0);
  }, [value]);

  if (value !== index) return <></>;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <div className={styles.codes}>
        {codes.map((code, key) => {
          return <Codes name={code.name} code={code.code} key={key} />;
        })}
      </div>

      <div className={styles.table}>
        {isEmi ? (
          <>
            <DataGrid
              rows={rows.filter((key, id) => {
                if (selectedRows.includes(id)) return true;
                return false;
              })}
              columns={columns}
              onSelectionChange={(newSelection) => {
                handleSelected(newSelection);
              }}
              hideFooter
              checkboxSelection={false}
              disableSelectionOnClick={true}
            />

            <div className={styles.buttonGroup}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  setNormal(0);
                  setExtra(0);
                  setAmount(0);
                  setIsEmi(false);
                  setSelectedRows([]);
                }}
              >
                Refresh
              </Button>
            </div>
          </>
        ) : (
          <>
            <DataGrid
              rows={rows}
              columns={columns}
              onSelectionChange={(newSelection) => {
                handleSelected(newSelection);
              }}
              hideFooter
              checkboxSelection
              disableSelectionOnClick={true}
            />

            <div className={styles.buttonGroup}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => setIsEmi(true)}
              >
                Select EMI
              </Button>
            </div>

            <div className={styles.total}>
              <p>
                Total Normal Points :
                <span style={{ fontWeight: "bold" }}>{normal}</span>
              </p>
              <p>
                Total Extra Points :
                <span style={{ fontWeight: "bold" }}>{extra}</span>
              </p>
              <p>
                Total Amount :
                <span style={{ fontWeight: "bold" }}>{amount} B</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
