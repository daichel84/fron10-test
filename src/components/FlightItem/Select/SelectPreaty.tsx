import React, { useState } from 'react'

import {default as ReactSelect, OptionProps} from 'react-select';
import { components } from "react-select";






const Option = (props: OptionProps) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  )
}

let options = [
  { value: 'La Habana', label: 'La Habana' },
  { value: 'Miami', label: 'Miami' },
  { value: 'Toronto', label: 'Toronto' },
  {value: "Londres", label: "Londres"}
];

const SelectPreaty = () => {
    const [selectedOption, setSelectedOption] = useState<any>({value: "Londres", label: "Londres"});

  return (
    <div>
 <ReactSelect
  options={options}
  isMulti
  closeMenuOnSelect={false}
  hideSelectedOptions={false}
  components={{
    Option
  }}
  onChange={setSelectedOption}
  
  value={selectedOption}
/>
    </div>
  )
}

export default SelectPreaty
