import { brandTags } from '../data/content'

/** One half of the loop — repeated so it stays wider than the viewport */
const TAGS_PER_GROUP = 4

const tagGroup = Array.from({ length: TAGS_PER_GROUP }, () => [...brandTags]).flat()

function TagGroup({ groupIndex }: { groupIndex: number }) {
  return (
    <div className="tag-strip__group">
      {tagGroup.map((tag, index) => (
        <span key={`${groupIndex}-${tag}-${index}`} className="tag-strip__item">
          {tag}
        </span>
      ))}
    </div>
  )
}

export function TagStrip() {
  return (
    <div className="tag-strip" aria-hidden="true">
      <div className="tag-strip__track">
        <TagGroup groupIndex={0} />
        <TagGroup groupIndex={1} />
      </div>
    </div>
  )
}
