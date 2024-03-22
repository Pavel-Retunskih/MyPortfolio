export const Theme = {
    font: {
        family: "Fira Code",
        size: {
            headline: "62px",
            subHeadline: "32px",
            body: "18px",
            labes: "16px",
            code: "14px",
        }
    },
    colors:{
        primary:{
            black: "#01080E",
            blue: "#011627",
            darkBlue: "#011221"
        },
        secondary:{
            grey: "#607B96",
            mint: "#3C9D93",
            blue: "#4D5BCE",
            white: "#FFFFFF",
        },
        accent: {
            orange: "#FEA55F",
            mint: "#43D9AD",
            pink: "#E99287",
            lilac: "#C98BDF"
        },
        lines:"#1E2D3D",
        gradient:{
            first: "#4D5BCE",
            second: "#43D9AD"
        },
        buttons:{
            primary:{
                background:"#FEA55F",
                text: "#01080E",
                border: "none",
                borderRadius:"0.5em",
                hover:{
                    background:"#FFAC6B",
                }
            },
            default:{
                background:"#1C2B3A",
                text: "#FFFFFF",
                border: "none",
                borderRadius:"0.5em",
                hover:{
                    background:"#263B50",
                }
            },
            ghost:{
                background:"transparent",
                text: "#FFFFFF",
                border: "rgba(255, 255, 255, 1)",
                borderRadius:"0.5em",
                hover:{
                    background:"rgba(255, 255, 255, 0.7)",
                }
            }
        }
    } 
}