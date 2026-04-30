import './Socials.scss'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import { items } from './socials.data'

export const Socials = ({ className }) => {
  return (
    <div className={clsx('soc1als', className)}>
      <ul className="soc1als__list">
        {items.map(({ label, icon }, index) => (
          <li className="soc1als__item" key={index}>
            <a className="soc1als__link" href="/" title={label}>
              <span className="visually-hidden">{label}</span>
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
