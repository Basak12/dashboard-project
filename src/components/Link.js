import classNames from "classnames";
import UseNavigation from "../hooks/UseNavigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = UseNavigation(); //reach navigate function by using useContext

  const classess = classNames(
    "text-slate-100 py-3",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      //return the pages in a new tab if user clicks the sidebar by holding command or control key
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <>
      <a href={to} onClick={handleClick} className={classess}>
        {children}
      </a>
    </>
  );
}

export default Link;
