import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  navItemButton: {
    width: "100px",
    height: "50px",
    marginLeft:'3% !important',
    border: "3px solid white !important",
    padding: "1% !important",
    borderRadius: "20px !important",
    color: 'white !important',
    textDecoration: 'none',
 

  }
  ,
  navItemButtonSelected: {
    width: "100px",
    height: "50px",
    color: 'black !important',
    backgroundColor: 'white !important',
    border: "3px solid black !important",
    outline: "3px solid white !important",
    padding: "3% !important",
    borderRadius: "20px !important",
  }
});