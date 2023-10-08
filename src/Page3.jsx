// import { useState } from 'react'
import { Container,Header,Logo,Chart, Body } from './components/Page3Style'
import Rcmd from './components/Page3/Rcmd';
import PageButton from './components/Share/PageButton';
import Search from './components/Share/Search';

function Page3() {
  // const [count, setCount] = useState(0)

  return (
    <Container>
      <Header>
      <Logo>MOVIE</Logo>
        <PageButton/>
      </Header>

      <Body>
        <Search/>
        <Rcmd/>
        <Chart />
      </Body>
    </Container>
  );
}

export default Page3