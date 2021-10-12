import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import Popover from '@material-ui/core/Popover';
import { Paper, Tooltip, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

const Header = (props) => {
  const [showTutorials, setShowTutorials] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [hover, setHover] = useState(null);

  const Main = () => (
    <Fade in={!showTutorials && !showAbout} timeout={250}>
      <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <img src="static/images/recording@8x.png" style={{ width: '100%' }} />
        </div>
        <div className="content">
          <div className="inner">
            {props.title ? <h1>{props.title}</h1> : <></>}
            {props.subtitle ? <p>{props.subtitle}</p> : <></>}
          </div>
        </div>
        {props.showLinks ? (
          <nav>
            <ul>
              <li>
                <a
                  href="https://github.com/delewis13/DungeonDJ-UI/releases/latest/download/dungeondj.dmg"
                  aria-label="Mac Download"
                  style={{ backgroundColor: 'black' }}
                >
                  Mac
                </a>
              </li>
              <li>
                <Tooltip
                  size="large"
                  title={
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0.25rem',
                      }}
                    >
                      <ErrorIcon
                        style={{ margin: 'auto', marginBottom: '0.5rem' }}
                      />
                      <Typography style={{ fontSize: '0.7rem' }}>
                        Windows installations will trigger a warning screen as
                        we have not yet purchased a Windows code signing
                        certificate. You can bypass this warning screen via
                        clicking "more info" & "run anyway"
                      </Typography>
                    </div>
                  }
                >
                  <a
                    href="https://github.com/delewis13/DungeonDJ-UI/releases/latest/download/dungeondj.exe"
                    style={{ backgroundColor: 'black' }}
                    onMouseEnter={(e) => {
                      setHover(e);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                  >
                    Windows
                  </a>
                </Tooltip>
              </li>
              <li>
                <a
                  onClick={() => setShowAbout(true)}
                  style={{ backgroundColor: 'black', cursor: 'pointer' }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShowTutorials(true)}
                  style={{ backgroundColor: 'black', cursor: 'pointer' }}
                >
                  Tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://www.patreon.com/dungeon_dj"
                  style={{ backgroundColor: 'black' }}
                >
                  Patreon
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
      </header>
    </Fade>
  );

  const Video = () => (
    <Fade in={showTutorials} timeout={250}>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            cursor: 'pointer',
            marginBottom: '8px',
            height: '30px',
            width: '30px',
          }}
          onClick={() => setShowTutorials(false)}
        >
          <FontAwesomeIcon size="2x" icon={faArrowLeft} />
        </div>

        <iframe
          style={{
            height: '45vw',
            width: '80vw',
          }}
          src="https://www.youtube.com/embed/videoseries?list=PLpItlhmfZ62nKmChUmY65dok_mz2BPo5g"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Fade>
  );

  const About = () => (
    <Fade in={showAbout} timeout={250}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          style={{
            cursor: 'pointer',
            height: '30px',
            width: '30px',
            margin: '16px',
            marginBottom: '0px'
          }}
          onClick={() => setShowAbout(false)}
        >
          <FontAwesomeIcon size="2x" icon={faArrowLeft} />
        </div>
        <div style={{ flexGrow: 1 }}>
        <Paper elevation={9} style={{margin: '16px', padding: '16px', flexGrow: 1, background: '#171717', color: 'white',}}>
            <Typography variant='subtitle1' align='center' gutterBottom>What is it?</Typography>
            <Typography gutterBottom>
              DungeonDJ is a voice-activated music player. Think of it like a
              configurable "Hey Siri" that plays whatever track you choose!
            </Typography>
            <Typography gutterBottom>
              No more fumbling around, tabbing through apps just to get
              the right ambience. Headed into battle? Configure "roll
              initiative" to start your battle playlist. Going into town?
              Create the phrase "bustling town" to start your town ambience.
            </Typography>
            <Typography variant='subtitle1' align='center' gutterBottom>Is it free?</Typography>
            <Typography gutterBottom>
              DungeonDJ provides a full-access 14 day trial, which only includes
              days you actually use it. After that you can maintain access via
              Patreon, where you can have your say in what new features get
              added!
            </Typography>
        </Paper>
        </div>

      </div>
    </Fade>
  );

  return (
    <>
      <Main />
      <Video />
      <About />
    </>
  );
};

Header.propTypes = {
  timeout: PropTypes.bool,
};

export default Header;
