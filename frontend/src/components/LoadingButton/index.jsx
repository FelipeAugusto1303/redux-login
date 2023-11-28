import "./LoadingButton.styles.css";

const LoadingButton = ({ loading, ...props }) => {
  return (
    <>
      {loading ? (
        <button className="loading-button-container">
          <span className="loader"></span>
        </button>
      ) : (
        <button className="not-loading" {...props}>
          {props.children}
        </button>
      )}
    </>
  );
};

export default LoadingButton;
