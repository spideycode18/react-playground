import React from 'react';
import FilterItem from '../FilterItem';
import { Filter } from '../../helper';

interface FilterListProps {
  filter: Filter;
  onChangeFilter: (filter: Filter) => void;
}

const FilterList: React.FC<FilterListProps> = ({filter, onChangeFilter}) => {
  return (
    <div className="filter-list">
      {
        [Filter.ALL, Filter.ONGOING, Filter.DONE].map((item: Filter, index: number) => <FilterItem key={index} filter={item} isActive={filter===item} onChangeFilter={onChangeFilter}/> )
      }
    </div>
  );
}

export default FilterList;
