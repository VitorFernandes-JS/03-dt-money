import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input placeholder="Busque por transações"></input>
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
