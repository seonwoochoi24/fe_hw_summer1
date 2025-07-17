import styled from "styled-components";
import likeIcon from "../assets/icons/like-velog.png"

const Box=styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 482px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
`
const Smallbox1=styled.div`
  height: 251.56px;
  
`
const Smallbox2=styled.div`
  display: flex;
  height: 189px;
  flex-direction: column;
  justify-content: space-between;
`
const Smallbox3=styled.div`
  border-top: 0.1px solid lightgray;
  height: 45px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`
const Wrapper=styled.div`
  
`
const Thumbnail=styled.img`
  height:210px;
  width: 100%;
  object-fit: cover;


`
const Title=styled.h5`
  margin: 10px;
`
const Content=styled.div`
  margin: 10px ;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
const Date=styled.div`
  margin: 10px;
  font-size: 10px;
  color: gray;
`

const Icon=styled.img`
    width: 15px;
    height: 15px;
`;

function Card({title, content, thumbnail, createdAt}) {
  const [year, month, day]=createdAt.split(" ")[0].split("-")
  return(
  <Box>
    <Smallbox1>
      <Thumbnail src={thumbnail}/>
    </Smallbox1>
    <Smallbox2>
      <div>
       <Title>{title}</Title>
       <Content>{content}</Content>
      </div>
    <Date>{year}년 {month}월 {day}일 · {day}개의 댓글</Date>
    </Smallbox2>
    <Smallbox3>
      <Wrapper>
        <Content>by <b>작성자</b></Content>
      </Wrapper>
      <Content>
        <Icon src={likeIcon}/>
        {day}
      </Content>
    </Smallbox3>
  </Box>
  );

}

export default Card;