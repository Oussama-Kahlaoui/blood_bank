import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const sampleDonors = [
  { id: 1, name: "John Doe", blood_type: "O+", city: "New York" },
  { id: 2, name: "Jane Smith", blood_type: "A-", city: "Los Angeles" },
];

function DonorListPage() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>Donor List</Typography>
      <List>
        {sampleDonors.map((donor) => (
          <Paper key={donor.id} sx={{ my: 2, p: 2 }}>
            <ListItem>
              <ListItemText primary={`${donor.name} - ${donor.blood_type}`} secondary={donor.city} />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Container>
  );
}

export default DonorListPage;
