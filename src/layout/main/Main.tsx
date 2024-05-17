import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/container/Container";

export function Main() {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
}

export const StyledMain = styled.main``;
