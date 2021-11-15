import { useEffect, useRef, useState, useContext } from 'react';
import { request, gql } from 'graphql-request';
import useSWR from 'swr';
import { NavStateContext } from '../helpers/navStateContext';
import { } from 'react';
import Song from './song';

const SONGS_QUERY = gql`
  query HomePage($genre: String!) {
    SongsByGenre(genre: $genre) {
      track_id
      track_name
      track_artist
      track_popularity
      track_album_id
      track_album_name
      track_album_release_date
      playlist_name
      playlist_id
      playlist_genre
      playlist_subgenre
      danceability
      energy
      key
      loudness
      mode
      speechiness
      acousticness
      instrumentalness
      liveness
      valence
      tempo
      duration_ms
      album_cover_art_url
    }
  }
`;

const fetcher = genre =>
  request('http://localhost:3000/api/graphql', SONGS_QUERY, {
    genre
  });

export default function Genre({ genre }) {
  const { setActiveGenre } = useContext(NavStateContext)
  const { data, error } = useSWR([genre], fetcher);
  const genreObserver = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && 100 < entry.intersectionRect.y < 400) {
          setActiveGenre(genreObserver.current.id)
        }
      }
      );
    });
    if (genreObserver.current) {
      observer.observe(genreObserver.current);
    }

    return () => {
      observer.unobserve(genreObserver.current)
    };
  }, [genreObserver.current, data])

  if (!data && !error)
    return (
      <div className="mt-5 d-flex justify-content-center">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error) {
    console.error(error);
    return (
      <div className="mt-5 d-flex justify-content-center">
        <div className="alert alert-danger" role="alert">
          Something bad happened!
        </div>
      </div>
    );
  }

  return (
    <div className="container" name={`${genre}`} id={`${genre}s`}>
      <h2 className="text-capitalize py-5" style={{ marginTop: genre === 'rap' && '60px' }} >{genre}</h2>
      {data.SongsByGenre.length ? (
        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5 g-3 position-relative" >
          {data.SongsByGenre.map(song => (
            <Song key={song.track_id} song={song} />
          ))}
          <div ref={genreObserver} id={`${genre}`} style={{ height: '25px', position: 'absolute', bottom: '10px' }}/>
        </div>
      ) : (
        <p className="text-center">No Results!</p>
      )}
    </div>
  );
}
