import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    align-items: center;
    flex-direction: ${propps => propps.direction|| "row"};
`