import styled from 'styled-components';

export const Form = styled.form` 
max-width: 500px;
   padding: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  
  border: 1px solid rgb(0, 0, 0);
  }`;

export const Label = styled.label`  
  display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
}`;

export const Input = styled.input`  

    font-size: 16px;
}`;
export const Button = styled.button`
  padding: 1px 4px;
  margin-left: 10px;
  border: 1px solid rgb(219, 216, 216);
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
    rgba(0, 0, 0, 0.2) 0px 1px 0px;
  &:active {
    background-color: rgb(99 149 241);
  }
`;
