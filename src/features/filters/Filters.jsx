import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCategory, getDate, getSource, setCategory, setDate, setSource } from './filtersSlice';
import {
  BBC_NEWS,
  CATEGORIES,
  GUARDIAN_NEWS,
  NEW_YORK_TIMES_NEWS,
  SOURCES
} from '../../utils/constants';
import Select from '../../ui/Select';
import Input from '../../ui/Input';
import { getSettings } from '../settings/settingsSlice';

const FiltersContainer = styled.div`
  display: flex;
  padding: 20px 40px;
  justify-content: space-around;
  gap: 1rem;
  background-color: #172554;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Filters = () => {
  const { category: settingsCategory, source: settingsSource } = useSelector(getSettings);
  const category = useSelector(getCategory);
  const source = useSelector(getSource);
  const date = useSelector(getDate);
  const dispatch = useDispatch();

  return (
    <FiltersContainer>
      <Select
        id="category"
        value={category === '' ? settingsCategory : category}
        onSelectChange={(e) => dispatch(setCategory(e.target.value))}
        options={CATEGORIES}
      />
      <Select
        id="source"
        value={source === '' ? settingsSource : source}
        onSelectChange={(e) => dispatch(setSource(e.target.value))}
        options={SOURCES}
      />

      <Input
        type="date"
        value={date}
        onInputChange={(e) => dispatch(setDate(e.target.value))}
        id="birthday"
        name="birthday"
      />
    </FiltersContainer>
  );
};

export default Filters;
