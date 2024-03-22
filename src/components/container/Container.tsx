import styled from "styled-components";

type ContainerPropsType = {
    width?: string
}

    export const Container = styled.div<ContainerPropsType>`
        width: 100%;
        max-width: ${props=> props.width || "1782px"};
        margin: 0 auto;
    `