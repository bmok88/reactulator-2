import styled from "styled-components";

const NumWrapper = styled.div`
  border-radius: 64px;
  width: ${({ zero }) => (zero ? "138px" : "64px")};
  height: 64px;
  border: 1px solid black;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Num = ({ num }) => {
  return (
    <NumWrapper zero={num === 0}>
      <div>{num}</div>
    </NumWrapper>
  );
};

export default Num;
