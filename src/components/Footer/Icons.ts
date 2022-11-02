import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { StyledIcon } from '@styled-icons/styled-icon'
import { Rss } from '@styled-icons/fluentui-system-regular/Rss'

type Icon = {
  [key: string]: StyledIcon;
};

const Icons: Icon = {
  Github,
  Linkedin,
  Rss
}

export default Icons
