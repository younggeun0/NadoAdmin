import { PinDropSharp } from '@material-ui/icons';
import React, { useContext, useEffect, useReducer } from 'react';
import {
  Datagrid,
  List,
  ListFilterContext,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
  useListContext,
  useListController,
  useListFilterContext,
} from 'react-admin';
import { type1Choices, type2Choices, type3Choices } from '../../types';

const reducer = (state, action) => {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case 'UserNameSelected': {
      if (action.value === '') {
        const newFilterList = state.filterList.filter((filter) => {
          const { name } = filter.props;
          return name !== 'email' && name !== 'address';
        });
        return { filterList: newFilterList };
      }

      const emailFilter = state.filterList.filter((filter) => {
        const { name } = filter.props;
        return name === 'email';
      });
      if (emailFilter.length) return state;

      return {
        filterList: state.filterList.concat(
          <ReferenceInput
            name="email"
            source="email"
            reference="users"
            onChange={(event) => {
              action.dispatch({
                type: 'EmailSelected',
                dispatch: action.dispatch,
                value: event.target.value,
              });
            }}
          >
            <SelectInput source="email" optionText="email" />
          </ReferenceInput>
        ),
      };
    }
    case 'EmailSelected': {
      if (action.value === '') {
        const newFilterList = state.filterList.filter((filter) => {
          const { name } = filter.props;
          return name !== 'address';
        });
        return { filterList: newFilterList };
      }

      const addressFilter = state.filterList.filter((filter) => {
        const { name } = filter.props;
        return name === 'address';
      });
      if (addressFilter.length) return state;

      return {
        filterList: state.filterList.concat(
          <ReferenceInput
            name="address"
            source="address"
            reference="users"
            onChange={(event) => {
              action.dispatch({
                type: 'AddressSelected',
                dispatch: action.dispatch,
                value: event.target.value,
              });
            }}
          >
            <SelectInput source="address" optionText="address" />
          </ReferenceInput>
        ),
      };
    }
    case 'AddressSelected': {
      return state;
    }
    default:
      return state;
  }
};

// const defaultFilters = [
//   <TextInput label="Search" source="q" alwaysOn />,
//   <SelectInput name="test1" source="id" choices={type1Choices} />,
//   <SelectInput name="test2" source="title" choices={type2Choices} disabled />,
//   <SelectInput name="test3" source="body" choices={type3Choices} disabled />,
// ];

function PostList(props) {
  const { displayedFilters, hideFilter } = useListController(props);
  const [state, dispatch] = useReducer(reducer, {
    filterList: [
      <TextInput label="Search" source="q" alwaysOn />,
      <ReferenceInput
        name="userId"
        source="userId"
        reference="users"
        onChange={(event) => {
          // eslint-disable-next-line no-alert
          dispatch({
            type: 'UserNameSelected',
            dispatch,
            value: event.target.value,
          });
        }}
      >
        <SelectInput source="userId" optionText="name" />
      </ReferenceInput>,
    ],
  });

  let { filterList } = state;
  // const { filterValues, displayedFilters } = useListController(props);
  // const context = useContext(ListFilterContext);
  // eslint-disable-next-line no-console
  console.log(displayedFilters);

  // 필터는 표시 안됐는데, filterList에 있는 경우 제거
  if (!displayedFilters.userId) {
    filterList = filterList.filter((filter) => {
      const { name } = filter.props;
      return name !== 'email' && name !== 'address';
    });
    hideFilter('email');
    hideFilter('address');
  } else if (!displayedFilters.email) {
    filterList = filterList.filter((filter) => {
      const { name } = filter.props;
      return name !== 'address';
    });
    hideFilter('address');
  }

  // if (!displayedFilters.) {
  //   hideFilter('title');
  //   hideFilter('body');
  // } else if (!displayedFilters.title) {
  //   hideFilter('body');
  // }

  return (
    <List {...props} filters={filterList}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
}

export default PostList;
