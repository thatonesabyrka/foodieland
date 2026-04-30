import './Logo.scss'
import clsx from 'clsx'

export const Logo = ({ className, loading = 'lazy' }) => {
  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/images/logo.svg"
        alt=""
        width={110}
        height={30}
        loading={loading}
      />
    </a>
  )
}
