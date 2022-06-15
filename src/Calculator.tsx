import styled from "styled-components";

import Num from "./Num.tsx";

const CalculatorWrapper = styled.div`
  border: 1px solid black;
  width: 296px;
  margin: 80px auto 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const Display = styled.div`
  height: 64px;
  border: 1px solid black;
  margin: 8px;
`;

const KeysContainer = styled.div`
  display: flex;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiscellaneousKeysContainer = styled.div`
  display: flex;
`;

const NumsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OperationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const operations = ["/", "*", "-", "+", "="];
const miscellaneous = ["AC", "+/-", "%"];

const Calculator = () => {
  const renderNums = () => nums.map((num) => <Num num={num} />);

  const renderOperations = () =>
    operations.map((operation) => <Num num={operation} />);

  const renderMiscellaneous = () =>
    miscellaneous.map((miscellaneous) => <Num num={miscellaneous} />);

  return (
    <CalculatorWrapper>
      <Display></Display>
      <KeysContainer>
        <SubWrapper>
          <MiscellaneousKeysContainer>
            {renderMiscellaneous()}
          </MiscellaneousKeysContainer>
          <NumsContainer>{renderNums()}</NumsContainer>
        </SubWrapper>
        <OperationsContainer>{renderOperations()}</OperationsContainer>
      </KeysContainer>
    </CalculatorWrapper>
  );
};

export default Calculator;
