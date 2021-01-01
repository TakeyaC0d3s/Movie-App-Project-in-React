import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


const AddFavorite = () => {
   return (
      <>
      <span className='mr-2'>Add to Favorites</span>
      <AiIcons.AiOutlineHeart fill='red'/>     
      </>
   );
};

export default AddFavorite;