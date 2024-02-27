import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderEndRadius={20} placeholder="Search games..." variant="fiiled" />
    </InputGroup>
  );
};

export default SearchInput;
