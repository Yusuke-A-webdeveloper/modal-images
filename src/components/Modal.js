import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { natureList } from '../data';

const Modal = () => {
  const { isModalOpen, closeModal, mainModalImg, changeMainImg, toggleImg } =
    useGlobalContext();

  // destructuring
  const { id: mainId, title: mainTitle, img: mainImg } = mainModalImg;
  const { id: toggleId, title: toggleTitle, img: toggleImage } = toggleImg;

  return (
    <Wrapper>
      <article className={isModalOpen ? 'modal-overlay show' : 'modal-overlay'}>
        <div className="btn-con" onClick={closeModal}>
          <RxCrossCircled />
        </div>
        <main>
          <div className="main-img">
            {/* displaying toggleImg if no toggleImg, displaying mainImg */}
            <img src={toggleImage ? toggleImage : mainImg} alt="nature" />
          </div>
          <header>
            <h2>{toggleTitle ? toggleTitle : mainTitle}</h2>
          </header>
        </main>
        <div className="img-list">
          {natureList.map((list) => {
            const { id, title, img } = list;
            return (
              <div
                // if toggleId gets active, if not mainId gets active
                className={`img-con ${
                  toggleId
                    ? toggleId === id && 'active'
                    : mainId === id && 'active'
                } `}
                key={id}
                onClick={() => changeMainImg(id)}
              >
                <img src={img} alt={title} />
              </div>
            );
          })}
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    display: none;
    z-index: 100;
  }
  .modal-overlay.show {
    display: block;
  }
  .btn-con {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;
    svg {
      font-size: 50px;
      color: #fff;
    }
  }
  main {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .main-img {
      position: relative;
      width: 650px;
      height: 300px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    header {
      text-align: center;
      margin-top: 15px;
      h2 {
        color: #fff;
        text-transform: capitalize;
        letter-spacing: 1px;
        font-size: 35px;
      }
    }
  }
  .img-list {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 100px;
    .img-con {
      position: relative;
      width: 200px;
      height: 100px;
      cursor: pointer;
      opacity: 0.5;
      transition: 0.3s ease-out;
      :hover {
        opacity: 1;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .img-con.active {
      opacity: 1;
    }
  }
  @media (max-width: 700px) {
    main .main-img {
      width: 450px;
      height: 220px;
    }
    .img-list {
      padding: 50px 20px;
    }
  }
  @media (max-width: 670px) and (max-height: 414px) {
    .modal-overlay {
      position: absolute;
      height: 140vh;
    }
  }
`;

export default Modal;
