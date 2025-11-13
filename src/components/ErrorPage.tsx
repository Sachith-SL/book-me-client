import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="bm-page">
      <div className="bm-card">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page Not Found</p>
        <button
          className="btn"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
