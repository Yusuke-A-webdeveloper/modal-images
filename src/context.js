import React, { useState, useContext } from 'react';
import { natureList } from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainModalImg, setMainModalImg] = useState({});
  const [toggleImg, setToggleImg] = useState({});

  const openModal = (e) => {
    if (e.target.classList.contains('nature-img')) {
      let id = e.target.parentElement.dataset.id;
      id = parseInt(id);
      const newList = natureList.filter((list) => list.id === id);
      // newList is object inside array[0]
      setMainModalImg(newList[0]);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setToggleImg({});
  };

  const changeMainImg = (id) => {
    const newList = natureList.filter((list) => list.id === id);
    setToggleImg(newList[0]);
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen,
        mainModalImg,
        changeMainImg,
        toggleImg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom fook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
