import './Section.scss'
import clsx from 'clsx'

export const Section = ({
  className,
  title,
  titleId,
  description,
  linkLabel,
  children,
}) => {
  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
        {linkLabel && (
          <a className="section__link" href="/">
            {linkLabel}
          </a>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
