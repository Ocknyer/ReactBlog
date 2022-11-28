import './Category.css'

export default function Category({category}) {
  console.log(category)
  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      {
        category.map((item, idx) => 
          <dd key={idx}>{item}</dd>
        )
      }
    </dl>
  )
}