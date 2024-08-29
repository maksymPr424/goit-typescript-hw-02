import css from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({
  message,
}: ErrorMessageProps): JSX.Element {
  return <span className={css.errorMessage}>{message}</span>;
}
