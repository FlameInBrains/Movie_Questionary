import React, { useContext } from 'react';
import './NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../../components/PageContext.tsx';

export const NotFoundPage = () => {
  const { setCurrentPage } = useContext(PageContext);
  const navigate = useNavigate();

  const handleBackHomeBtn = () => {
    navigate('/');
  };

  return (
    <div className='body'>
      <div className='text'>
        <div>Opps..</div>
        <hr></hr>
        <div>It is a space where nothing exists</div>
      </div>

      <div className='back-home'>
        <button 
          onClick={() => {
            handleBackHomeBtn();
            localStorage.setItem('currentPage', JSON.stringify('1'))
          }} 
          className='back-home-btn'>
          Back Home
        </button>
      </div>

      <div className='astronaut'>
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt=""
          className='src'
        ></img>
      </div>
    </div>
  );
};