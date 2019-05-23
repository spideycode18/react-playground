import React from 'react';
import FilterItem from '../FilterItem';
import { Filter } from '../../types';

interface FilterListProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterList: React.FC<FilterListProps> = ({filter, setFilter}) => {
  return (
    <div className="filter-list">
      {
        [Filter.ALL, Filter.ONGOING, Filter.DONE].map((item: Filter, index: number) => <FilterItem key={index} filter={item} isActive={filter===item} onChangeFilter={setFilter}/> )
      }
    </div>
  );
}

export default FilterList;
