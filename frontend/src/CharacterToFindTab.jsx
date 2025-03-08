export const CharacterToFindTab = ({ characterList }) => {
  return (
    <div className="characterToFind">
        <h3>To be found</h3>
        <ul>
            {characterList.map((character) => (
            <li key={character}>{character}</li>
            ))}
        </ul>
    </div>
  );
};
