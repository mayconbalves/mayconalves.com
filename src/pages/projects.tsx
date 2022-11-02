import * as React from 'react'
// import Link from 'gatsby-link'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Seo from '../components/Seo'

const Projects = () => {
  return (
    <Layout>
      <Seo title="Meus Projetos" />
      <Grid>
        <section>
          <div
            style={{ width: '100%', height: '0', padding: '0 0 60% 0', position: 'relative'}}>
            <iframe
              src="https://giphy.com/embed/0N0nWD1SF9jGUXhQiV"
              width="100%"
              height="100%"
              style={{ position: 'absolute' }}
              className="giphy-embed"
              allowFullScreen>
            </iframe>
          </div>
          {/*<h4><Link to="https://resident-evil.vercel.app/">Projeto Resident Evil</Link></h4>
          <p*>
            Feito em HTML5, CSS3, JavaScript e Bootstrap
          </p*/}
        </section>
      </Grid>
    </Layout>
  )
}

export default Projects
