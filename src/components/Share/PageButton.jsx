import styled from "styled-components";
import { Link } from 'react-router-dom';

const PageButtonInfo = styled.div`
position: absolute;
width: 180px;
height: 65px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;

background: #1C1E2C;
color: #F4F3F3;
`;

function PageButton() {

    // const Data = () => {
        
    // }


    return(
<>
        <Link to="/"><PageButtonInfo style={{left:'370px',top:'46px'}}>박스오피스</PageButtonInfo></Link>
        <Link to="/page2"><PageButtonInfo style={{left:'550px',top:'46px'}}>상영작 추천</PageButtonInfo></Link>
        <Link to="/page3"><PageButtonInfo style={{left:'730px',top:'46px'}}>내게 맞는 영화</PageButtonInfo></Link>
  </>
    )
}

export default PageButton;