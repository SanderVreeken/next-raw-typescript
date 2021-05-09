import TextPage from '../../components/TextPage'
import { consultingText } from '../../elements/texts'

// Change the path of the service pages.
export default function Home() {
  return <TextPage text={consultingText} />
}