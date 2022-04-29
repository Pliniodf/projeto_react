import PropTypes from 'prop-types'

function Item(marca, ano_lancamento){
  return (
    <>
      <li>{marca} - {ano_lancamento}</li>
      <p>Text</p>
    </>
  )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired
}

export default Item