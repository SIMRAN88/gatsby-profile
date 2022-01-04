import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import NightImage from '../images/night-mode.png';
import DayImage from '../images/day.png';

const DarkMode = () => {
    return (
        <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="toggle">
            <input
              className="input-toggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
          <img className="toggle-image" src={theme === "dark" ? DayImage: NightImage} alt={`${theme}image`} />
          </label>
        )}
      </ThemeToggler>

    )
}
export default DarkMode