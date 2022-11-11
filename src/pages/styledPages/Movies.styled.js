import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FormMovie = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

export const InputForm = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  border: none;
  padding-left: 10px;
  font-size: 18px;

  &:focus {
    outline: 2px solid blue;
  }
`;

export const ButtonFrom = styled.button`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: 1000ms background-color;

  &:hover {
    background-color: white;
    color: black;
    animation: 3s infinite alternate slidein;
  }
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const ItemSearch = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
`;

export const LinkSearch = styled.li`
  margin-right: auto;
`;

export const ImageSearch = styled.img`
  border-radius: 5px;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.75);
  height: 450px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NameFilm = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
  padding: 20px;
  max-width: 200px;
`;

export const SearchNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: orange;
  }
`;
