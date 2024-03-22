import styled from "styled-components"
import { Theme } from "../../styles/Theme"

export function Footer(){
    return(
        <StyledFooter>

        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    margin: 0 auto;
    width: 100%;
    max-width: 1782px;
    height: 50px;
    border: 2px solid green;
    background-color: ${Theme.colors.primary.blue};
`