import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles({
    navItemButton: {
        color: "white !important",
        display: "flex !important",
        "&&:hover": {
          cursor: "pointer",
          color: "black !important",
          background: "rgba(255, 255, 255, 0.8); !important",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25); !important",
        }}
});