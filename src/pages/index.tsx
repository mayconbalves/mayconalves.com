import React from 'react'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Seo from '../components/Seo'
import WorkSection from '../components/WorkSection'

const HomePage = () => (
  <Layout>
    <Seo title='Home'/>
    <Grid>
      <WorkSection />
    </Grid>
  </Layout>
)

export default HomePage
