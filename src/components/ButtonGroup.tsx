import { Button } from "./ui/button";

const ButtonGroup = () => {
  return (
    <section className='space-y-3 mb-2'>
      <Button className='w-full border shadow-none' variant='secondary'>
        Mark all as complete
      </Button>
      <Button className='w-full border shadow-none' variant='secondary'>
        Mark all as incomplete
      </Button>
      <Button className='w-full border shadow-none' variant='secondary'>
        Reset to initial
      </Button>
      <Button className='w-full border shadow-none' variant='secondary'>
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
