import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" height="200px" width="100%">
      <Stack gap="40px" alignItems="center" p="40px">
        <Typography variant="h6"> gymApp </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
