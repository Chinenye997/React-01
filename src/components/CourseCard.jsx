function CourseCard({Icon, title, price}) {
  return(
    <div>
      <span><Icon /></span>
      <h3>{title}</h3>
      <span>{price}</span>
    </div>
  )
}

export default CourseCard;