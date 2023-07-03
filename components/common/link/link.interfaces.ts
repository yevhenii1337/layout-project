import { MouseEventHandler} from 'react'
export interface LinkProps {
  id?: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
  text: string;
  enabled: boolean;
}
