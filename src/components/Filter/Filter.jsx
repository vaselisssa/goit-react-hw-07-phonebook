import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
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
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
