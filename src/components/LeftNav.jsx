import { Link } from 'react-router-dom'
import './../scss/components/leftNav.scss'
import icon1 from './../assets/img/icon1.svg'
import icon2 from './../assets/img/icon2.svg'
import icon3 from './../assets/img/icon3.svg'
import icon4 from './../assets/img/icon4.svg'

/**
 * Composant qui affiche la navigation de gauche du site
 * @returns LeftNav
 */
function LeftNav() {
  return (
    <div className="left">
      <div className="left_nav">
        <Link to="#">
          <img src={icon1} alt="icon1" />
        </Link>
        <Link to="#">
          <img src={icon2} alt="icon2" />
        </Link>
        <Link to="#">
          <img src={icon3} alt="icon3" />
        </Link>
        <Link to="#">
          <img src={icon4} alt="icon4" />
        </Link>
      </div>
      <dir className="left_copyright">Copyright, SportSee 2020</dir>
    </div>
  )
}

export default LeftNav
