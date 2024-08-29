import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FormikValues,
  FormikHandlers,
} from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";

type PropFunc = {
  onSearch: (query: string) => void;
};

type Actions = FormikHelpers<FormikValues>;

const initValues: FormikValues = {
  query: "",
};

export default function SearchBar({ onSearch }: PropFunc) {
  const notify = () => toast.error("Please, write search query!");

  const handleSearch = (values: FormikValues, formikHelpers: Actions): void => {
    const query = values.query.trim();

    if (query === "") {
      notify();
      return;
    }
    onSearch(query);
    formikHelpers.resetForm();
  };

  return (
    <header>
      <Formik initialValues={initValues} onSubmit={handleSearch}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.sendBtn} type="submit">
            <BiSearch />
            Search
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}
