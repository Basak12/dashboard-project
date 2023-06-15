import UseNavigation from "../hooks/UseNavigation";

const Route = ({ path, children }) => {
  const { currentPath } = UseNavigation(); //reach current path state from NavigationContext via useContext
  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
