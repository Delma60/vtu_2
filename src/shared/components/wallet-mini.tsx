import {
  Box,
  Typography,
  IconButton,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

export default function WalletMini() {
  return (
    <Card>
      <CardContent sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                bgcolor: "secondary.main",
                borderRadius: 2,
                p: 1,
                display: "flex",
              }}
            >
              <AccountBalanceWalletOutlinedIcon
                color="primary"
                fontSize="small"
              />
            </Box>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                Wallet Balance
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, letterSpacing: "-0.5px" }}
              >
                ₦45,250.00
              </Typography>
            </Box>
          </Stack>
          <IconButton
            size="small"
            sx={{
              bgcolor: "grey.100",
              borderRadius: 1.5,
              "&:hover": { bgcolor: "grey.200" },
            }}
          >
            <AddRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
