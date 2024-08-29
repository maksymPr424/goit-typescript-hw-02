import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader(): JSX.Element {
  return (
    <div className={css.loader}>
      <InfinitySpin width="200" color="#8276ff" />
    </div>
  );
}
