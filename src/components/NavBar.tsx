import { Button } from '@mui/material';
import { Colors } from './utils/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const [hoveredButton, setHoveredButton] = useState(0);
  const navigation = useNavigate();

  const navButtonTitle = [
    {
      key: 1,
      title: 'Home page',
      color: Colors.WHITE_LETTERS,
      hoverColor: Colors.BLACK_LETTERS,
      navigate: '/',
    },
    {
      key: 2,
      title: 'Piano Time 🎹',
      color: Colors.BLACK_LETTERS,
      hoverColor: Colors.WHITE_LETTERS,
      navigate: '/Piano',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'grey',
        display: 'flex',
        gap: 15,
        padding: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {navButtonTitle.map((buttonProps) => (
        <Button
          onMouseEnter={() => setHoveredButton(buttonProps.key)}
          onMouseLeave={() => setHoveredButton(0)}
          key={buttonProps.key}
          style={{
            color: buttonProps.color,
            backgroundColor:
              hoveredButton === buttonProps.key ? buttonProps.hoverColor : '',
          }}
          onClick={() => navigation(buttonProps.navigate)}
        >
          {buttonProps.title}
        </Button>
      ))}
    </div>
  );
};
