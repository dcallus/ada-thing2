import { DataGrid, GridColDef, GridRowClassNameParams } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  {
    field: "spacer", // Add an empty spacer column
    headerName: "", // Empty header
    width: 20, // Adjust the width for the desired margin
    sortable: false,
  },

  {
    field: "id",
    headerName: "ID",
    align: "center",
    headerAlign: "center",
    width: 20,
  },

  {
    field: "origin",
    headerName: "Origin",
    align: "center",
    headerAlign: "center",
    width: 130,
  },
  {
    field: "destination",
    headerName: "Destination",
    align: "center",
    headerAlign: "center",
    width: 130,
  },
  {
    field: "departing",
    headerName: "Departing Time",
    align: "center",
    headerAlign: "center",
    width: 130,
  },
  {
    field: "arriving",
    headerName: "Arriving Time",
    align: "center",
    headerAlign: "center",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    align: "center",
    headerAlign: "center",
    width: 130,
  },
];

const rows = [
  {
    spacer: "",
    id: 1,
    origin: "Edinburgh",
    destination: "Glasgow",
    departing: "06:30",
    arriving: "07:25",
    status: "Delayed",
  },
  {
    id: 2,
    origin: "Edinburgh",
    destination: "Aberdeen",
    departing: "07:45",
    arriving: "10:25",
    status: "On time",
  },
  {
    id: 3,
    origin: "Edinburgh",
    destination: "Dundee",
    departing: "08:00",
    arriving: "09:25",
    status: "Delayed",
  },
  {
    id: 4,
    origin: "Edinburgh",
    destination: "London",
    departing: "08:30",
    arriving: "12:30",
    status: "Cancelled",
  },
  {
    id: 5,
    origin: "Edinburgh",
    destination: "Paris",
    departing: "08:40",
    arriving: "20:30",
    status: "On time",
  },
  {
    id: 6,
    origin: "Edinburgh",
    destination: "Glasgow",
    departing: "09:00",
    arriving: "09:45",
    status: "Delayed",
  },
  {
    id: 7,
    origin: "Edinburgh",
    destination: "London",
    departing: "09:30",
    arriving: "13:30",
    status: "On time",
  },
  {
    id: 8,
    origin: "Edinburgh",
    destination: "Inverness",
    departing: "09:45",
    arriving: "13:25",
    status: "On Time",
  },
  {
    id: 9,
    origin: "Edinburgh",
    destination: "Newcastle",
    departing: "10:00",
    arriving: "11:30",
    status: "Delayed",
  },
  {
    id: 10,
    origin: "Edinburgh",
    destination: "Glasgow",
    departing: "10:30",
    arriving: "11:25",
    status: "Delayed",
  },
  {
    id: 11,
    origin: "Edinburgh",
    destination: "London",
    departing: "11:00",
    arriving: "15:00",
    status: "On Time",
  },
  {
    id: 12,
    origin: "Edinburgh",
    destination: "Inverness",
    departing: "11:30",
    arriving: "15:25",
    status: "On Time",
  },
];

function Challenge1() {
  function getRowClassName(params: GridRowClassNameParams<any>): string {
    const status = params.row.status;

    if (status === "Cancelled") {
      return "cancelled";
    } else if (status === "Delayed") {
      return "delayed";
    }

    return "on-time";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="Challenge1"
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          width: "75%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 25]}
          rowHeight={50}
          getRowClassName={getRowClassName}
        />
      </div>
    </div>
  );
}
export default Challenge1;
