import styled from "styled-components";

export const Title = styled.h1`
    margin: 4rem 0 1.5rem 0;
    font-size: 32px;
    font-weight: 600;
    display: inline-block;
  `,
  SeeAll = styled.div`
    float: right;
    position: absolute;
    top: 4.5rem;
    right: 1rem;
    &: after;
  `,
  Container = styled.div`
    max-width: 966px;
    margin: 0 auto;
    clear: both;
  `,
  TitleWrap = styled.div`
    display: block;
    position: relative;
  `,
  ScrollWrap = styled.div`
    display: block;
    overflow-y: auto;
  `,
  CardContainer = styled.div`
    float: left;
  `;
