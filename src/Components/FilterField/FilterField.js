import React from 'react';
import s from './FilterField.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValueAction } from '../../redux/contacts/actions/phoneBookActions';

const FilterField = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <div className={s.filterField__conteiner}>
      <label className={s.filterField__label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(getFilterValueAction(e.target.value))}
          className={s.filterField__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
    </div>
  );
};

FilterField.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default FilterField;
