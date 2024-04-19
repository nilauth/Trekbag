import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const SortSelector = () => {
  return (
    <div className=' h-fit py-4 px-5 border-b'>
      <Select>
        <SelectTrigger className='w-[280px]'>
          <SelectValue placeholder='Select a sorting method' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='default'>Sort by default</SelectItem>
            <SelectItem value='packed'>Sort by packed</SelectItem>
            <SelectItem value='unpacked'>Sort by unpacked</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelector;
