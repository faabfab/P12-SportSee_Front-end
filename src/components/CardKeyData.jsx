import calorieIcon from './../assets/img/calorie-icon.svg'
import proteinIcon from './../assets/img/protein-icon.svg'
import carbohydrateIcon from './../assets/img/carbohydrate-icon.svg'
import lipidIcon from './../assets/img/lipid-icon.svg'

/**
 * Composant qui affiche en français les informations clés sous forme de card
 * @param {string} name Le nom de l'élément
 * @param {string} content La valeur de l'élément
 * @returns CardKeyData
 */
function CardKeyData({ name, content }) {
  let spanTraduction = ''
  let img = ''
  let unit = ''
  switch (name) {
    case 'calorie':
      spanTraduction = 'Calories'
      img = calorieIcon
      unit = 'KCal'
      break
    case 'protein':
      spanTraduction = 'Protéines'
      img = proteinIcon
      unit = 'g'
      break
    case 'carbohydrate':
      spanTraduction = 'Glucides'
      img = carbohydrateIcon
      unit = 'g'

      break
    case 'lipid':
      spanTraduction = 'Lipides'
      img = lipidIcon
      unit = 'g'

      break
    default:
      break
  }

  return (
    <div className={name}>
      <img src={img} alt="" />
      <div className="cardKeyData_content">
        {content}
        {unit} <br />
        <span className="cardKeyData_content_span">{spanTraduction}</span>
      </div>
    </div>
  )
}

export default CardKeyData
