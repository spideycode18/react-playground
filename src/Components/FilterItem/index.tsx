import React from 'react';
import classNames from 'classnames';
import './filter.scss';
import { Filter } from '../../helper';

interface FilterItemProps {
  filter: Filter;
  isActive: boolean;
  onChangeFilter: (filter: Filter) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({filter, isActive, onChangeFilter}) => {
  const filterClass = classNames('filter', {
    'active': isActive
  });

  const handleChangeFilter = () => {
    onChangeFilter(filter);
  }

  return (
    <button onClick={handleChangeFilter} className={filterClass}>{filter}</button>
  );
}

export default FilterItem;
