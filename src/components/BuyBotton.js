import { Box, Button } from "@mui/material";
import React from "react";

function BuyButton() {
    return (
      <Box my={10} textAlign="center">
        <a
          href="https://www.coinbase.com/advanced-trade/spot/KEYCAT-USD"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              width: { xs: "200px", sm: "220px", md: "240px" },
              py: 1.8,
              px: 6,
              borderRadius: "53px",
              bgcolor: "white",
              color: "#292035",
              border: "1px solid #292035",
              fontWeight: 600,
              fontFamily: '"Press Start 2P", cursive',
              fontSize: { xs: "0.55rem", sm: "0.65rem", md: "0.75rem" },
              textTransform: "none",
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
            }}
          >
            Buy Now
          </Button>
        </a>
      </Box>
    );
}

export default BuyButton;
