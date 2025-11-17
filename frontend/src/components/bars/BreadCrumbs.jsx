import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean).filter(seg => /^[a-zA-Z]+$/.test(seg));
;
  return (
    <nav className="breadcrumb">
      <Link to="/home">Home</Link>

      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={name}>
            {" > "}
            {isLast ? (
              <span className="breadcrumb-current"><Link to={routeTo}>{name}</Link></span>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
