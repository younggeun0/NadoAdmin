import React, { useReducer } from 'react';
import {
  Datagrid,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
  useListContext,
} from 'react-admin';
// import DynamicFilters from './DynamicFilters';

const reducer = (state, action) => {
  // eslint-disable-next-line no-debugger
  debugger;
  // TODO, x버튼으로 필터 제거 시 동작을 알 수 없음
  // 다 붙여놓고 hideFilter로 제어하는게 좋을 듯 함(showFilter, hideFilter)
  switch (action.type) {
    case 'UserNameSelected':
      if (action.value === '') {
        const newFilterList = state.filterList.filter((filter) => {
          const { name } = filter.props;
          return name !== 'email' && name !== 'address';
        });
        return { filterList: newFilterList };
      }
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
    case 'EmailSelected':
      if (action.value === '') {
        const newFilterList = state.filterList.filter((filter) => {
          const { name } = filter.props;
          return name !== 'address';
        });
        return { filterList: newFilterList };
      }
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
    case 'AddressSelected':
      return state;
    default:
      return state;
  }
};

function PostList(props) {
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

  const { filterList } = state;
  const { filterValues, displayedFilters } = useListContext();
  // eslint-disable-next-line no-console
  console.log(filterValues, displayedFilters);

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
