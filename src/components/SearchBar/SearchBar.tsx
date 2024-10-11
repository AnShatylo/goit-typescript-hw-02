import { Field, Form, Formik } from 'formik';
import css from './SearchBar.module.css';
import { FC } from 'react';
import { SearchBarProps } from '../App/App.types';

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <header className={css.searchHeader}>
        <Formik
      initialValues={{query: ''}}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }} 
      >
        <Form className={css.searchForm}>
          <Field
          type="text"
          name="query"
          placeholder="Search images and photos"
          className={css.field}>
          </Field>
          <button type="submit" className={css.submit}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar
