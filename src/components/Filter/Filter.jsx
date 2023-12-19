import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterId = nanoid();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          id={filterId}
          value={filter}
          onChange={handleChangeFilter}
          disabled={contacts.length === 0}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
