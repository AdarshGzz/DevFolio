import React from 'react'

interface LayoutProps{
 className? : string,
 id?:string,
 children : React.ReactNode,
}

const Layout = ({className,id,children}:LayoutProps) => {
  return (
    <section className={`${className}`} id={id} >
      {children}
    </section>
  )
}

export default Layout
