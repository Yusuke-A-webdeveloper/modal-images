import styled from 'styled-components';
import Footer from './Footer';
import MainImages from './MainImages';

const Home = () => {
  return (
    <Wrapper>
      <header>
        <h1>modal images</h1>
      </header>
      <MainImages />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  header {
    background: var(--title-bg);
    h1 {
      color: #fff;
      text-align: center;
      font-size: 45px;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 10px;
    }
  }
  @media (max-width: 414px) {
    header h1 {
      font-size: 30px;
    }
  }
`;

export default Home;
