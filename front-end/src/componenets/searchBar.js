import React, {useState} from 'react'
import {data, setData} from './fetch.js'

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");



const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    data.filter((item) => {
    return item.name.match(searchInput);
});
}
<input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

}