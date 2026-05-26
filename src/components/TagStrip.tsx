import { brandTags } from '../data/content'

export function TagStrip() {
  const tags = [...brandTags, ...brandTags]

  return (
    <div className="tag-strip" aria-hidden="true">
      <div className="tag-strip__track">
        {tags.map((tag, index) => (
          <span key={`${tag}-${index}`} className="tag-strip__item">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
