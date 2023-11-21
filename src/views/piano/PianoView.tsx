import { PianoTouch } from './touche/PianoTouch';

export const PianoView = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 15,
          flexWrap: 'wrap',
        }}
      >
        <PianoTouch />
      </div>
    </div>
  );
};
