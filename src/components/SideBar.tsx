import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const SideBar = () => {
  return (
    <div className='col-span-1 row-span-11 flex flex-col p-4 items-center justify-between'>
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
};

export default SideBar;
