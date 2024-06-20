
import { useState } from 'react';
import Select from 'react-select';


           

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
 
];


const DroupDownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Selected option:', selectedOption);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleChange}
     
    />
  );
};

export default DroupDownMenu;

