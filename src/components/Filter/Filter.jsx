import * as s from './Filter.styled';

export const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <s.Input
      type="text"
      value={filter}
      onChange={handleChangeFilter}
      placeholder="Search contacts"
    />
  );
};
