import React from 'react'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Seo from '../components/Seo'

const HomePage = () => (
  <Layout>
    <Seo title='Home'/>
    <Grid>
      <h1>hello world</h1>
    </Grid>
  </Layout>
)

export default HomePage
