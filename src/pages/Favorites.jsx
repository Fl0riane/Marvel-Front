import NoEmplyTab from "../components/NoEmplyTab";

const Favorites = ({ tab, addFavorite }) => {
  const empty = tab.length === 0;

  return (
    <div>
      <div>
        {empty ? (
          <p>Vou n'avez pas encore de favoris</p>
        ) : (
          <div>
            <NoEmplyTab addFavorite={addFavorite} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Favorites;
