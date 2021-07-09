function ErrorTag(props) {
  const { children } = props;
  return (
    <div>
      <h6 style={{ color: 'red' }}>{children}</h6>
    </div>
  );
}

export default ErrorTag;
