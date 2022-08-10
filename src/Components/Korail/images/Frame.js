const Frame = ({ width = '374', height = '31' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 374 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 20C0 8.95431 8.95431 0 20 0H355C366.046 0 375 8.9543 375 20V31H0V20Z'
        fill='#D9D9D9'
      />
      <path
        d='M194.55 11.78H180.45L187.5 23.99L194.55 11.78ZM181.59 12.455H193.395L187.5 22.67L181.59 12.455Z'
        fill='#686868'
      />
    </svg>
  );
};

export default Frame;
