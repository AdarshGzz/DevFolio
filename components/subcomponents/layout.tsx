import React from 'react'

interface LayoutProps{
 className? : string,
 children : React.ReactNode
}

const Layout = ({className,children}:LayoutProps) => {
  return (
    <section className={`${className}`}>
      {children}
    </section>
  )
}

export default Layout
