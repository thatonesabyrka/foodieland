import './Header.scss'
import clsx from 'clsx'
import { Logo } from '@/components/Logo'
import { Socials } from '@/components/Socials'
import { BurgerButton } from '@/components/BurgerButton'
import { menuItems } from './header.data'

export const Header = ({ url }) => {
  return (
    <header className="header" data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__menu" data-js-mobile-menu-overlay="">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }, index) => (
              <li className="header__menu-item" key={index}>
                <a
                  className={clsx(
                    'header__menu-link',
                    href === url && 'is-active'
                  )}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Socials className="header__soc1als" />
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{ 'data-js-mobile-menu-burger-button': '' }}
        />
      </div>
    </header>
  )
}
