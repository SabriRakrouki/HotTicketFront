import { makeStyles } from "@mui/styles";
export const CarouselStyle = makeStyles({
    slider: {
        position: "relative",
        height: "100vh",
        display: "flex",
        justifContent: "center",
    alignItem: "center",
  
},

    image: {
        width: "1800px",
        height: "93%",
        borderRadius: "10px",
},

rightArrow: {
    position: "absolute",
        top: "50 %",
            right: "32px",
                fontSize: "3rem",
                    color: "#000",
                        zIndex: "10",
                            cursor: "pointer",
                                userSelect: "none",
},

leftArrow: {
    position: "absolute",
        top: "50 %",
        left: "32px",
        fontSize: "3rem",
        color: "#000",
        zIndex: "10",
       cursor: "pointer",
       userSelect: "none",
},

slide: {
    opacity: "0",
    transitionDuration: "1s ease",
}


});