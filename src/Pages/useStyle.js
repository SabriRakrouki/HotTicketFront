import { makeStyles } from "@material-ui/core/styles";



export const pageStyle = makeStyles({

    firstHomeImage: {
        position: 'relative',
        zIndex: "-1",
        width: 'auto',
        overflow: 'hidden',
        height: '100%',

    }
    , HomeText: {
        position: 'absolute',
        fontSize: "160px !important",

        fontWeight: "600 !important"

    }
    ,
    whiteHomeText: {
        color: '#DBA219 !important ',
        WebkitTextStroke: "2px white !important",
        transitions: '5s',
        "&:hover": {
            color: "transparent !important",
            WebkitTextStroke: "2px white !important",

        }
    }, redHomeText: {
        color: '#DBA219 !important ',
        WebkitTextStroke: "2px white !important",
        transitions: '5s',
        "&:hover": {
            color: 'transparent !important',
            WebkitTextStroke: "2px red !important",

        }


    },
    HomeEventButton: {
        position: 'absolute',
        backgroundColor: '  transparent !important',
        bottom: '50px',
        height: '50px',
        backgroundSize: '0% 0% !important',
        transition: "background-size 0.5s, color 0.5s,font-size 0.5s",
        overflow: 'hidden',
        padding: '1%',
        backgroundImage: "linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2))",
        backgroundRepeat: "no-repeat",
        WebkitTextStroke: '0.5px black !important',
        backgroundPosition: "50% 50% !important",
        color: "rgba(255,255,255,1) !important",
        fontSize: '45px',
        '&:hover': {


            fontSize: "52px",
            backgroundSize: '100% 100% !important',


        },
    },
    textFormContanct: {
        width: "100%",
        marginBottom: '20px',
        '& label': {
            color: 'white !important'
        },
        '& label.Mui-focused': {
            color: 'White !important',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
            color: 'white !important',
        },
        '& .MuiOutlinedInput-root': {

            '& input': {
                color: 'white !important',

            },
            "&.Mui-focused input": {
                color: 'white !important'

            },
            '&.MuiInputLabel-filled input': {
                color: 'white !important'
            }
            ,
            '& fieldset': {
                borderColor: 'white !important',



            },
            '&:hover fieldset': {
                borderColor: 'white',


            },
            '&.Mui-focused fieldset': {
                borderColor: 'white !important',
                backgroundColor: 'transparent !important',

            }, '&.MuiInputLabel-filled fieldset ': {
                borderColor: 'white !important',
                backgroundColor: 'transparent !important',
            },
        },
    },
    textareaCSS: {
        marginTop: '2%',
        resize: 'none  !important',
        width: '800px',
        height: '200px',
        border: '1px solid white',
        backgroundColor: 'transparent',
        color: 'white',
        '&:focus': {
            outline: 'none',
            border: '1px solid white'
        }
        ,
        '&::placeholder': {

            color: 'white !important'
        }
    },
    SendContactButton: {
        width: "100px",
        height: "50px",
        marginLeft: '3% !important',
        border: "3px solid white !important",
        padding: "1% !important",
        borderRadius: "20px !important",
        color: 'white !important',
        textDecoration: 'none',
    }







})