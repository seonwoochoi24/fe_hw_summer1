import { styled } from "styled-components";
import { dummyData } from "../data/dummy_data";

import Card from "../components/Card.jsx";
import Categories from "../components/Categories.jsx";
import Contents from "../components/Contents.jsx";
import Header from "../components/Header.jsx";

const Page=styled.div`
  background-color: #f8f9fa;;
  padding: 20px 20px;
  width: 100%;
  min-width: 450px;
  overflow-x: hidden;
  min-height: 100vh; 
  box-sizing: border-box; 
`

console.log(dummyData);
function HomePage() {
  return(
  <Page>
    <Header/>
    <Categories/>
    <Contents>
        {dummyData.map((item) => (
        <Card
          key={item.postID}
          title={item.title}
          content={item.content}
          thumbnail={item.thumbnail}
          createdAt={item.createdAt}
        />
      ))}
    </Contents>
  </Page>
  );

}

export default HomePage;
