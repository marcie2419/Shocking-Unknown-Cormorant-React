import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Shocking Unknown Cormorant</title>
        <meta property="og:title" content="Shocking Unknown Cormorant" />
      </Helmet>
    </div>
  )
}

export default Home
