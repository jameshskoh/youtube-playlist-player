const Logout = (props: { deleteBearerTokenHandler: () => void }) => {
  props.deleteBearerTokenHandler();
  return <>You are logged out!</>;
};

export default Logout;
