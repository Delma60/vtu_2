import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    icon: <DashboardRoundedIcon fontSize="small" />,
    active: true,
  },
  { label: "Buy Airtime", icon: <PhoneAndroidRoundedIcon fontSize="small" /> },
  { label: "Buy Data", icon: <WifiRoundedIcon fontSize="small" /> },
  { label: "Utility Bills", icon: <ReceiptLongRoundedIcon fontSize="small" /> },
  { label: "Transactions", icon: <LayersRoundedIcon fontSize="small" /> },
  { label: "Settings", icon: <SettingsRoundedIcon fontSize="small" /> },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 220,
        flexShrink: 0,
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "grey.100",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        py: 3,
        px: 1.5,
      }}
    >
      {/* Logo */}
      <Box sx={{ px: 1.5, mb: 3 }}>
        <Typography
          variant="h6"
          color="primary.main"
          sx={{ fontWeight: 800, letterSpacing: "-0.5px" }}
        >
          SwiftVTU
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Premium VTU Services
        </Typography>
      </Box>

      {/* Nav */}
      <List disablePadding sx={{ flexGrow: 1 }}>
        {NAV_ITEMS.map(({ label, icon, active }) => (
          <ListItemButton
            key={label}
            selected={active}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&.Mui-selected": {
                bgcolor: "primary.main",
                color: "white",
                "& .MuiListItemIcon-root": { color: "white" },
                "&:hover": { bgcolor: "primary.dark" },
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: 36, color: active ? "white" : "text.secondary" }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: active ? 600 : 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Upgrade */}
      <Button
        variant="contained"
        fullWidth
        sx={{ mb: 1.5, py: 1.2, bgcolor: "primary.main" }}
      >
        Upgrade Account
      </Button>

      {/* Logout */}
      <ListItemButton sx={{ borderRadius: 2 }}>
        <ListItemIcon sx={{ minWidth: 36, color: "error.main" }}>
          <LogoutRoundedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary="Logout"
          primaryTypographyProps={{
            sx: {
                fontSize: 14,
                fontWeight: 500,
                color: "error.main",
            }
          }}
        />
      </ListItemButton>
    </Box>
  );
}
