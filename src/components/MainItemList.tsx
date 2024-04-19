import ItemList from "./ItemList";
import SortSelector from "./SortSelector";

const MainItemList = () => {
  return (
    <div className='border-r col-span-2 row-span-11'>
      <SortSelector />
      <ItemList />
    </div>
  );
};

export default MainItemList;
