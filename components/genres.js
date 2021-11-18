import Genre from './genre';

const GENRES = ['rap', 'pop', 'edm', 'r&b', 'rock', 'latin'];

export default function Genres({active, setActive}) {
  return (
    <>
      {GENRES.map(genre => (
        <Genre key={genre} genre={genre} active={active} setActive={setActive}/>
      ))}
    </>
  );
}
