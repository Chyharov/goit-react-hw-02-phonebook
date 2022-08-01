import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        className={s.input}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
