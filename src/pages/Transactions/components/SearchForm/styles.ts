import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    padding: 1rem;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;

    border: 1px solid ${(props) => props.theme["green-300"]};
    background: transparent;
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      border-color: ${(props) => props.theme["green-500"]};
      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      transition: filter 0.2s;
    }
  }
`;
