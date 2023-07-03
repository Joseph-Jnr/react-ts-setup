import { Helmet } from 'react-helmet'

type Props = {
  title: string
  description?: string
}

const PageHelmet = ({ title, description = '' }: Props) => (
  <Helmet title={`${title} | App name`}></Helmet>
)

export default PageHelmet
