import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CastMovieApi } from 'utils/MovieApi';
import { CharacterCast, ImageCast, ItemCast } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    CastMovieApi(movieId).then(res => setCast(res.data.cast)).catch(error => console.log(error.message));
  }, [movieId])
  

  return (
      <ItemCast>
        {cast.length > 0 && cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <ImageCast src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : `https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png`} alt={character} />
            <CharacterCast>{name}</CharacterCast>
            <CharacterCast>Character: {character}</CharacterCast>
          </li>
        ))}
      </ItemCast>
  )
}