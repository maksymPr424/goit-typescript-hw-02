import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onAddPage: () => void;
};

export default function LoadMoreBtn({
  onAddPage,
}: LoadMoreBtnProps): JSX.Element {
  return (
    <button className={css.loadMore} onClick={onAddPage}>
      Load more
    </button>
  );
}
