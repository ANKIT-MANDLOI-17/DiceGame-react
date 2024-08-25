import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  // margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border : 1px solid red;

  .dice {
    cursor: pointer;
    // border : 1px solid red;
  }

  p {
    font-size: 20px;
  }
`;
