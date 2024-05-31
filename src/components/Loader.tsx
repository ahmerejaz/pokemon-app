export const Loader = () => {
  return (
    <div
      className='d-flex m-5 justify-content-center'
      role='alert'
      aria-live='assertive'
    >
      <div className='spinner-border text-dark' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
