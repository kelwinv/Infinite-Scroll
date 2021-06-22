import styled from "styled-components";

export const Container = styled.li`
  display: flex;

  width: 100%;
  background: #efeefe;
  padding: 12px;
  gap: 8px;
  border-radius: 8px;

  h1 {
    margin-bottom: 8px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  > img {
    border-radius: 50%;
    width: 80%;
    object-fit: contain;
  }
`;
