import { request, gql } from 'graphql-request';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import Song from './song';
// intersection observer API - provides a way to asynchronously observe changes in the insection of a target element with an ancestor element or with a top-level document
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

export default function Genre({ genre, active, setActive }) {
  const { data, error } = useSWR([genre], fetcher);
  // element we want to observe in the virtual DOM
  const containerRef = useRef(null)

    const callbackFunction = (entries) => {
      // console.log('entries:', entries)
      const [ entry ] = entries
      // attempted to pass in entry as an argument but it did not work.
      // console.log('entry', entry)

      // active !== genre to make sure if active is already set as genre it wouldn't continue to update state. 
      // if(entry.isIntersecting && active !== genre) {
      //   setActive(genre)
      // } else {
      //   return
      // }
      if(entry.isIntersecting) {
        setActive(genre)
      } else {
        return
      }
    }
    // options object contains required properties
    const options = {
      // element used as viewport for checking visibility of target
      root: null,
      rootMargin: "0px",
      // must show all of container
      threshold: 0.85
    }

    // creates observer on first render and every render after adds intersection observer to component. Run with changes to containerRef and options
    useEffect(() => {
      // constructor function for intersectionobserver
      const observer = new IntersectionObserver(callbackFunction, options)
      // if containerRef exists so it doesn't observe something that hasn't been created yet
      if (containerRef.current) observer.observe(containerRef.current)

      // clean up function to prevent memory leaks. Stops observing once component unmounts
      return () => {
        if(containerRef.current) observer.unobserve(containerRef.current)
      }
    }, [containerRef, options])

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
// add id={genre} to link the href in the nav. This will populate ids for all the genres with the genre name.
// add ref={containerRef} to div so intersection oberserver knows which element to observe
  return (
    <div className="container pt-4" id={genre} ref={containerRef}>
      <h2 className="text-capitalize py-5">{genre}</h2>
      {data.SongsByGenre.length ? (
        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5 g-3">
          {data.SongsByGenre.map(song => (
            <Song key={song.track_id} song={song} />
          ))}
        </div>
      ) : (
        <p className="text-center">No Results!</p>
      )}
    </div>
  );
}
