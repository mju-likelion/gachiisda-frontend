const TimeImage = ({ width = '71', height = '77' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 71 77'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.440693'
        y='0.51123'
        width='69.8253'
        height='76.173'
        fill='url(#Time)'
      />
      <defs>
        <pattern
          id='Time'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_968_550'
            transform='scale(0.0151515 0.0138889)'
          />
        </pattern>
        <image
          id='image0_968_550'
          width='66'
          height='72'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export default TimeImage;
