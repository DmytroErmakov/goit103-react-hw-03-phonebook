import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'

export function Filter({ onChange }) {
  return (
    <label className={styles.filterLabel}>
      Find contact by the name
      <input type="text" name="filter" onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};