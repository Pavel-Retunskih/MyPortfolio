import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    align-items: ${propps => propps.align|| "center"};
    justify-content: ${propps => propps.justify|| "center"};
    flex-direction: ${propps => propps.direction|| "row"};
    flex-wrap: ${propps => propps.wrap|| "nowrap"};
`