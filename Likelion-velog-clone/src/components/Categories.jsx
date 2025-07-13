// Categories.jsx
import styled from "styled-components";
import trendIcon from "../icons/trend-velog.png"
import clockIcon from "../icons/clock-velog.png"
import feedIcon from "../icons/feed-velog.png"
import menuIcon from "../icons/menu-velog.png"
import downIcon from "../icons/down-velog.png"

const Box=styled.div`
    display: flex;
    flex-direction: row;
    height: 72px;
    justify-content: space-between;
    align-items: center;
`
const Btnleft=styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;
    justify-content: space-between;
    align-items: center;
    
`
const Categorybtn=styled.div`
    display: flex;
    flex-direction: row;
    gap:5px;
    align-items: center;
    &:first-child {          
    border-bottom: 2px solid black;}    
    &:nth-child(2){filter: invert(75%) grayscale(150%);
     }
    &:nth-child(3){filter: invert(75%) grayscale(150%);
     }
`
const Icon=styled.img`
    width: 20px;
    height: 20px;

`
const Btnright=styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;
    justify-content: space-between;
    align-items: center;
`
const Downbtn=styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 80px;
    background-color: white;
    border-radius:5px;
    gap:5px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);

`
function Categories() {
  return(
  <Box>
    <Btnleft>
        <Categorybtn >
            <Icon src={trendIcon}/>
            트렌딩
        </Categorybtn>
            <Categorybtn>
            <Icon src={clockIcon}/>
            최신
        </Categorybtn>
            <Categorybtn>
            <Icon src={feedIcon}/>
            피드
        </Categorybtn>
    </Btnleft>
    <Btnright>
        <Downbtn>
            이번달
            <Icon src={downIcon}/>
        </Downbtn>
        <Icon src={menuIcon}/>
    </Btnright>

  </Box>
  );

}

export default Categories;