import CharacterCard from "./CharacterCard";

const NoEmplyTab = ({ tab, addFavorite }) => {
  return (
    <div>
      {tab.map((character) => {
        return (
          <CharacterCard
            key={character._id}
            character={character}
            addFavorite={addFavorite}
          />
        );
      })}
    </div>
  );
};

export default NoEmplyTab;
