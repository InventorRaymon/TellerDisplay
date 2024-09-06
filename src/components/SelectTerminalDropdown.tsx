/** @format */
import React, { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

// Define types for the dropdown option and props
interface DropdownOption {
  key: string;
  label: string;
}

interface SelectTerminalDropdownProps {
  options: DropdownOption[];
  onSelect?: (option: string) => void; // onSelect function that receives the selected option's label
}

const SelectTerminalDropdown: React.FC<SelectTerminalDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  }

  return (
    <div className="dropdown relative inline-block">
      <button
        onClick={toggleDropdown}
        className='dropdownButton bg-[#ebeaea] text-[#454444] border-none p-4 rounded-[7px] cursor-pointer w-[62vw] max-sm:w-[54vw] max-xl:w-[63vw]'
      >
        <div className='float-start font-semibold text-[18px]'>
          {selectedOption || 'Select an option'}
        </div>
        <GoChevronDown className='text-[#b5b3b3] text-[24px] relative top-[1px] float-end'/>
      </button>
      {isOpen && (
        <ul className='dropdownMenu block absolute bg-white border border-gray-300 rounded-[7px] mt-[5px] w-full shadow-lg z-1'>
          {options.map((option) => (
            <li
              key={option.key}
              className='dropdownItem p-[10px] cursor-pointer hover:bg-[#f1f1f1]'
              onClick={() => handleOptionClick(option.label)}
            >
              <div className='font-semibold text-[18px]'>
                {option.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectTerminalDropdown;
