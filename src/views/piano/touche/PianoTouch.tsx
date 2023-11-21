export const PianoTouch = () => {
  const totalTouches: number = 24;

  const whiteTouches = [...Array(totalTouches)].map((_, index) => (
    <div
      key={`white-${index}`}
      style={{
        width: '3rem',
        height: '6rem',
        border: '1px solid grey',
        backgroundColor: 'white',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
      }}
    ></div>
  ));

  const blackTouches = Array.from({ length: totalTouches })
    .map((_, i) => {
      if ([0, 1, 3, 4, 5].includes(i % 7)) {
        return (
          <div
            key={`black-${i}`}
            style={{
              width: '2rem',
              height: '4rem',
              position: 'absolute',
              marginLeft: `${(i + 1) * 3 - 1}rem`,
              backgroundColor: 'black',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              zIndex: 1,
            }}
          ></div>
        );
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div
      style={{
        position: 'relative',
        width: `${3 * totalTouches}rem`,
        display: 'flex',
      }}
    >
      {whiteTouches}
      {blackTouches}
    </div>
  );
};
