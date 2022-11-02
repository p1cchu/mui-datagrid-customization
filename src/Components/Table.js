import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import "../Styles/Table.css";

export default function Table({ gameData }) {
  const filteredData = gameData?.map((data) => {
    return {
      title: data.title,
      time: data.startTime.slice(11, 16),
      team1: data.teams[0].name,
      team1Logo: data.teams[0].logoUrl,
      team2: data.teams[1].name,
      team2Logo: data.teams[1].logoUrl,
      tournament: data.tournament.name,
      id: data.id,
      x: "x",
    };
  });

  const columns = [
    {
      field: "title",
      headerName: "TITLE",
      width: 80,
      headerAlign: "center",
      align: "center",
      cellClassName: "darker-text-cells",
    },
    {
      field: "time",
      headerName: "TIME",
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "team1",
      headerName: "TEAM 1",
      width: 110,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "team1Logo",
      headerName: "",
      width: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => <img src={params.value} className="img" />,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "x",
      headerName: "",
      width: 1,
      headerAlign: "center",
      align: "center",
      cellClassName: "darker-text-cells",
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "team2Logo",
      headerName: "",
      width: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => <img src={params.value} className="img" />,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "team2",
      headerName: "TEAM 2",
      width: 110,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "tournament",
      headerName: "TOURNAMENT",
      width: 240,
      headerAlign: "center",
      align: "left",
      cellClassName: "darker-text-cells",
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: 345,
          width: 763,
          "& .darker-text-cells": {
            color: "#A1A3A5",
          },
        }}
      >
        <DataGrid
          className="table"
          rows={filteredData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          headerHeight={32}
          rowHeight={52}
          sx={{
            boxShadow: 2,
            backgroundColor: "#2B3135",
            color: "white",
            "&.MuiDataGrid-root": {
              border: "none",
            },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
            ".MuiDataGrid-columnHeader": {
              backgroundColor: "#363B3F",
              color: "#A1A3A5",
              fontSize: 12,
            },
            ".no-filter .MuiSvgIcon-root": {
              display: "none",
            },
          }}
        />
      </Box>
    </>
  );
}
