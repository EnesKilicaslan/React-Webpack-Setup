import './styles.css'
import IMAGE from './react.png'
import SVG from './square.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        React dProject Setup {process.env.NODE_ENV} {process.env.porting}
      </h1>

      <img src={IMAGE} height={300} width={300} alt="React" />
      <img src={SVG} alt="svg" />

      <ClickCounter />
    </>
  )
}
