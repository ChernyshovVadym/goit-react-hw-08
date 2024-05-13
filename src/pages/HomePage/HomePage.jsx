import DocumentTitle from "../../DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.div}>
      <DocumentTitle>Home</DocumentTitle>
      <h3 className={css.h3}>Welcome Friend</h3>
    </div>
  );
};

export default HomePage;
