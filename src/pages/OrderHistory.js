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
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const order = useSelector((state) => state.cart.orderList);
  // console.log(order);

  return (
    <div>
      <Paper
        // elevation={50}
        sx={{
          padding: ".5% .5%",
          width: "90%",
          margin: "20px auto",
          boxShadow: "5px 5px 5px #353738",
          border: 3,
          borderColor: "black",
        }}
      >
        {order.map((items) => (
          <Accordion>
            <AccordionSummary
              sx={{ bgcolor: "#ebebe0" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={8}>
                <Grid item xs={4}>
                  <item>
                    <h4>Music Album</h4>
                  </item>
                </Grid>
                <Grid item xs={4}>
                  <item>
                    <h4>{items.date}</h4>
                  </item>
                </Grid>
                <Grid item xs={4}>
                  <item>
                    <h4>Total Amounts:{items.AlbumPrice}</h4>
                  </item>
                </Grid>
              </Grid>
            </AccordionSummary>
            {items.BandAlbums.map((album) => (
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
                          src={album.albumImage}
                          alt={album.albumName}
                        />
                      </item>
                    </Grid>
                    <Grid item xs={3}>
                      <item>
                        <h5 style={{ marginTop: "10px" }}>{album.albumName}</h5>
                      </item>
                    </Grid>
                    <Grid item xs={2.1}>
                      <item>
                        <h5 style={{ marginTop: "10px" }}>{album.quantity}</h5>
                      </item>
                    </Grid>
                    <Grid item xs={3}>
                      <item>
                        {" "}
                        <h5 style={{ marginTop: "10px" }}>
                          {album.albumPrice * album.quantity}
                        </h5>
                      </item>
                    </Grid>
                  </Grid>
                  {/* <hr /> */}
                </div>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}

        {order.map((items) => (
          <Accordion>
            <AccordionSummary
              sx={{ bgcolor: "#d7d7c1" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={8}>
                <Grid item xs={4}>
                  <item>
                    <h4>Band Merchandise</h4>
                  </item>
                </Grid>
                <Grid item xs={4}>
                  <item>
                    <h4>{items.date}</h4>
                  </item>
                </Grid>
                <Grid item xs={4}>
                  <item>
                    <h4>Total Amounts:{items.MerPrice}</h4>
                  </item>
                </Grid>
              </Grid>
            </AccordionSummary>
            {items.BandMercandise.map((merchandise) => (
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
                          src={merchandise.productImage}
                          alt={merchandise.productName}
                        />
                      </item>
                    </Grid>
                    <Grid item xs={3}>
                      <item>
                        <h5 style={{ marginTop: "10px" }}>
                          {merchandise.productName}
                        </h5>
                      </item>
                    </Grid>
                    <Grid item xs={2.1}>
                      <item>
                        <h5 style={{ marginTop: "10px" }}>
                          {merchandise.quantity}
                        </h5>
                      </item>
                    </Grid>
                    <Grid item xs={3}>
                      <item>
                        {" "}
                        <h5 style={{ marginTop: "10px" }}>
                          {merchandise.productPrice * merchandise.quantity}
                        </h5>
                      </item>
                    </Grid>
                  </Grid>
                  {/* <hr /> */}
                </div>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Paper>
    </div>
  );
};

export default OrderHistory;
