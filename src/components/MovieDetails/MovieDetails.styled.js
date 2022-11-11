import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DetailsLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
  font-size: 20px;
  margin: 20px;
  font-weight: bold;
  &:hover {
    color: orange;
  }
`;

export const DetailsImage = styled.img`
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.49);
`;

export const DetailsInfo = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  font-size: 18px;
`;

export const MovieInfo = styled.ul`
  width: 850px;
  line-height: 1.5;
  border-bottom: 2px solid black;
`;

export const TitleMovie = styled.li`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserScore = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const InformationDetails = styled.ul`
  font-size: 20px;
  margin-top: 50px;
`;
export const InformationNavLink = styled(NavLink)`
  display: block;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  text-decoration: none;
`;
