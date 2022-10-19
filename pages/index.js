import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Seo from './components/Seo'

export default function Home() {
  return (
    <div >
      <Seo title="Home"/>
      <h1>Index</h1>
    </div>
  )
}
