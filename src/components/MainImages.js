import { useGlobalContext } from '../context';
import styled from 'styled-components';
import { natureList } from '../data';

const MainImages = () => {
  const { openModal } = useGlobalContext();

  return (
    <Wrapper>
      <main>
        {natureList.map((list) => {
          const { id, img, title } = list;
          return (
            <div className="img-con" key={id} onClick={openModal} data-id={id}>
              <img className="nature-img" src={img} alt={title} />
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 120px);
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .img-con {
      position: relative;
      width: 400px;
      height: 250px;
      border-radius: 20px;
      cursor: pointer;
      transition: 0.3s ease-out;
      :hover {
        opacity: 0.7;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;

export default MainImages;
