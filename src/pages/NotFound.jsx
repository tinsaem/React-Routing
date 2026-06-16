import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

      
      </div>
    </div>
  );
}

export default NotFound;