import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const AddItemForm = () => {
  return (
    <form className='w-full space-y-4'>
      <Label htmlFor='item' className='text-lg'>
        Add an item
      </Label>
      <Input id='item' type='text' placeholder='Toothbrush...' className='placeholder:italic' />
      <Button className='w-full'>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
