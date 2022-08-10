const StationArrow = ({ width = '20', height = '11' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.66 4.58H0.8V6.24H15.66C14.7 6.94 13.5 8.14 12.66 9.28L14.12 10.12C15.48 8.36 17.5 6.56 19.3 5.4C17.5 4.26 15.48 2.46 14.12 0.7L12.66 1.54C13.5 2.68 14.7 3.88 15.66 4.58Z'
        fill='#064A87'
      />
    </svg>
  );
};

export default StationArrow;
