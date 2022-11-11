import styled from '@emotion/styled';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  color: blue;
`;

export const Item = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
`;
export const List = styled.li`
  margin-right: auto;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.75);
`;
