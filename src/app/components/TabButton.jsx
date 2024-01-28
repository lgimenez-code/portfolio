import React from 'react';

const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';

  return (
    <label onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{ children }</p>
    </label>
  )
}

export default TabButton;