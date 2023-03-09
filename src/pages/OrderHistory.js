import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OrderHistory = () => {
  return (
    <div>
      <Paper
        elevation={50}
        sx={{
          padding: ".5% .5%",
          width: "90%",
          margin: "20px auto",
          boxShadow: "5px 5px 5px #353738",
          border: 3,
          borderColor: "black",
        }}
      >
        <Accordion>
          <AccordionSummary
            sx={{ bgcolor: " #669999" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <item>
                  <h2>name</h2>
                </item>
              </Grid>
              <Grid item xs={4}>
                <item>
                  <h2>type</h2>
                </item>
              </Grid>
              <Grid item xs={4}>
                <item>
                  <h2>Total Amounts:</h2>
                </item>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <item>
                    <CardMedia
                      sx={{
                        width: "50px",
                        height: "50px",
                      }}
                      component={"img"}

                      // src={order.imageUrl}
                      // alt={order.name}
                    />
                  </item>
                </Grid>
                <Grid item xs={3}>
                  <item>
                    <h3 style={{ marginTop: "10px" }}>name</h3>
                  </item>
                </Grid>
                <Grid item xs={2.1}>
                  <item>
                    <h3 style={{ marginTop: "10px" }}>Quantity</h3>
                  </item>
                </Grid>
                <Grid item xs={3}>
                  <item>
                    {" "}
                    <h3 style={{ marginTop: "10px" }}>total price</h3>
                  </item>
                </Grid>
              </Grid>
              {/* <hr /> */}
            </div>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </div>
  );
};

export default OrderHistory;
