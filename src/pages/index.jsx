import React from 'react'

import Grid from '../components/Grid'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const Homepage = () => (
  <Layout>
    <Grid>
      <SEO
        lang="pt-br"
        title="Home | Maycon Alves - Front-end Developer"
        description="Site pessoal e blog de um desenvolvedor Front-end."
      />
      <h1>Homepage</h1>
    </Grid>
  </Layout>
)

export default Homepage