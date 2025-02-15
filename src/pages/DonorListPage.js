import React from "react";
import { Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const sampleDonors = [
  { id: 1, name: "John Doe", blood_type: "O+", city: "New York" },
  { id: 2, name: "Jane Smith", blood_type: "A-", city: "Los Angeles" },
  { id: 3, name: "Mike Johnson", blood_type: "B+", city: "Chicago" },
  { id: 4, name: "Emma Brown", blood_type: "AB-", city: "San Francisco" },
];

const columns = [
  { field: "name", headerName: "Name", flex: 1, editable: true },
  { field: "blood_type", headerName: "Blood Type", flex: 1, sortable: true },
  { field: "city", headerName: "City", flex: 1, sortable: true },
];

function DonorListPage() {
  return (
    <Container sx={{ mt: 4, height: 400 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Donor List
      </Typography>
      <DataGrid
        rows={sampleDonors}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pagination
      />
    </Container>
  );
}

export default DonorListPage;
