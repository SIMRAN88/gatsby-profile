import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
          <img className="toggle-image" src={theme === "dark" ? "https://www.flaticon.com/svg/static/icons/svg/191/191528.svg": "https://image.flaticon.com/icons/svg/1164/1164954.svg"} alt={`${theme}image`} />
          </label>
        )}
      </ThemeToggler>

    )
}
export default DarkMode