import React from 'react';
import PropTypes from 'prop-types';
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

function PostTitle({ record }) {
  return <span>Post {record ? `${record.title}` : ''}</span>;
}

function PostEdit(props) {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
}

PostTitle.defaultProps = {
  record: null,
};

PostTitle.propTypes = {
  record: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default PostEdit;
