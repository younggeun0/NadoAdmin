import React from 'react';
import { makeStyles } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import { useRecordContext } from 'react-admin';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    height: '0.5em',
    paddingLeft: 2,
  },
});

function MyUrlField({ source }) {
  const record = useRecordContext();
  const classes = useStyles();
  return record ? (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  ) : null;
}

MyUrlField.defaultProps = {
  source: '',
};

MyUrlField.propTypes = {
  source: PropTypes.string,
};

export default MyUrlField;
