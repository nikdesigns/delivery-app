import React from 'react';
import { Autocomplete, TextInput } from 'evergreen-ui';

export default function AutoComplete() {
  return (
    <div>
      <Autocomplete
        title="Fruits"
        onChange={(changedItem) => console.log(changedItem)}
        items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
      >
        {(props) => {
          const { getInputProps, getRef, inputValue } = props;
          return (
            <TextInput
              placeholder="Fruits"
              value={inputValue}
              ref={getRef}
              {...getInputProps()}
            />
          );
        }}
      </Autocomplete>
    </div>
  );
}
