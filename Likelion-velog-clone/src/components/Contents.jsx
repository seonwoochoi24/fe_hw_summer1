import styled from "styled-components";

const Box=styled.div`
    height: 100vh;
    width: 100vw;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    @media (max-width: 1056px) {
        grid-template-columns: repeat(2, 1fr);
    }
     @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
function Contents({children}) {
  return(
  <Box>
    {children}
  </Box>
  );
}

export default Contents;