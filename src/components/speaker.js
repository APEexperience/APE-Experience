import React from 'react'

import PropTypes from 'prop-types'

import './speaker.css'

const Speaker = (props) => {
  return (
    <div className={`speaker-speaker ${props.rootClassName} `}>
      <img alt="image" src={props.Image} className="speaker-image" />
      <div className="speaker-deails">
        <h3 className="speaker-name">{props.Name}</h3>
        <div className="speaker-position">
          <div className="speaker-point"></div>
          <span className="speaker-caption">{props.Detail}</span>
        </div>
      </div>
    </div>
  )
}

Speaker.defaultProps = {
  Image: '/speakers-1-1500w.png',
  Name: 'Samantha Johnson',
  Detail: 'CEO, Opary',
  rootClassName: '',
}

Speaker.propTypes = {
  Image: PropTypes.string,
  Name: PropTypes.string,
  Detail: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Speaker
