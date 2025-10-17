import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#0052FF",
        color: "white",
        py: 3,
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="h6">
        $DISCO is a meme coin with no intrinsic value or expectation of
        financial return.
        <br />
        <br />
        CA: 0x9a26F5433671751C3276a065f57e5a02D2817973
        <br />
        <br />
      </Typography>
    </Box>
  );
}

export default Footer;
