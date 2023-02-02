import { Input, Button, HStack, Box, VStack } from '@chakra-ui/react';
import React, {useCallback, useState, useEffect} from 'react'
import { data } from '../Utils/searches';

const SearchComp = () => {
    
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onTap = (searchTerm) => {
    setValue(searchTerm);
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    alert(searchTerm);
  };

  return (
    <VStack max-width="28rem" zIndex="100 !important">
      <HStack spacing="0" position="sticky">
        <Input value={value} onChange={onChange} placeholder= " What is on your mind today?" size='md' w="40rem" bg="#e9f6f7" />
        <Button onClick={() => onSearch(value)} bg='rgb(255,120,86)' px="2rem" color="white" variant='solid'>Search</Button>
      </HStack>
      {value !== "" && <VStack className="dropdown" style={{ backgroundColor: "#e9f6f7", width: "20rem", position: "absolute", top: "7rem", padding: "2rem"}}>
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.search.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onTap(item.search)}
              className="dropdown-row"
              key={item.search}
            >
              {item.search}
            </div>
          ))}
      </VStack>
      }
    </VStack>
  )
}

export default SearchComp