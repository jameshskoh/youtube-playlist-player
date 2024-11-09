const LoadingIndicator = (props: { message: string }) => {
  return (
    <div className="my-2 flex items-center justify-center space-x-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="spinner_S1WN" cx="4" cy="12" r="3" />
        <circle className="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
        <circle className="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
      </svg>
      <p>{props.message}</p>
    </div>
  );
};

export default LoadingIndicator;
