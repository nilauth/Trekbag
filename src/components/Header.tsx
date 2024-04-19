import Counter from "./Counter";
import MacButtons from "./MacButtons";

const Header = () => {
  return (
    <header className='border-b col-span-3 w-full flex justify-between items-center px-8'>
      <MacButtons />
      <Counter />
    </header>
  );
};

export default Header;
