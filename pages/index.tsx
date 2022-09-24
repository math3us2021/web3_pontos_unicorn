import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Table from '../components/Tabela/Tabela'

const Home: NextPage = () => {
  return (
    <div className={styles.externo}>
      <div>
      <Typography
            variant="h2"
            color={"#f8a0be"}
            sx={{ textAlign: "center" }}
          >
            Unicorn
          </Typography>
          <Typography
            variant="h4"
            color={"#ebced0"}
            sx={{ textAlign: "center" }}
          >
            Jogo infantil
          </Typography>
          <div>
        <Table></Table>
      </div>
      </div>
    
    </div>
  )
}

export default Home
