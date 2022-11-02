import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { Redux } from '@styled-icons/boxicons-logos/Redux'
import { Javascript } from '@styled-icons/boxicons-logos/Javascript'
import { Linux } from '@styled-icons/fa-brands/Linux'
import { DeveloperMode } from '@styled-icons/material-sharp/DeveloperMode'
import { Git } from '@styled-icons/boxicons-logos/Git'
import { HandsHelping } from '@styled-icons/fa-solid/HandsHelping'
import { StyledIcon } from '@styled-icons/styled-icon'
import { Html5 } from '@styled-icons/fa-brands/Html5'
import { Gatsby } from '@styled-icons/simple-icons/Gatsby'

type Icon = {
  [key: string]: StyledIcon;
};

const Icons: Icon = {
  'js': Javascript,
  'redux': Redux,
  'react': ReactLogo,
  'linux': Linux,
  'dev': DeveloperMode,
  'git': Git,
  'misc': HandsHelping,
  'html': Html5,
  'gatsby': Gatsby
}

export default Icons
