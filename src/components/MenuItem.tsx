function MenuItem(props: { name: String; price: Number; available: boolean }) {
  return (
    <div className={`menu-item ${!props.available ? 'disabled' : ''}`}>
      <div className="name">{props.name}</div>
      <div className="price">
        {props.price > 0 ? (
          <div v-if="price > 0" className="chip">
            {props.price} Kč
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default MenuItem
