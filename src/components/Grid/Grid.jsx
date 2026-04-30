import './Grid.scss'
import clsx from 'clsx'

export const Grid = ({ className, children, columns = 1 }) => {
  return (
    <ul className={clsx(`grid grid--${columns}`, className)}>
      {children.map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}
