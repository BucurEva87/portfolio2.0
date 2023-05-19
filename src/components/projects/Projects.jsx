import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import projects from '../../data/projects.jsx'
import tags from '../../data/tags.js'
import { FaAdn } from "react-icons/fa"
import './tags_style.scss'
import './style.scss'

const Projects = () => {
  const [activeTag, setActiveTag] = useState(null)
  const filteredProjects = activeTag ? projects.filter(pr => pr.tags.includes(activeTag)) : projects

  const projectStyle = {
    background: 'rgb(33, 150, 243)',
    color: '#040403',
    borderRadius: '1.6rem'
  }
  const arrowStyle = {
    borderRight: '7px solid rgb(33, 150, 243)'
  }
  const iconStyle = {
    background: '#000',
    color: '#fff'
  }

  const handleTagClick = (e) => {
    const tagName = e.target.textContent.toLowerCase()

    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })

    setActiveTag(tagName === activeTag ? null : tagName)
  }

  return (
    <>
      <VerticalTimeline>
        { filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(pr => <VerticalTimelineElement
          key={pr.name}
          className="vertical-timeline-element--work"
          contentArrowStyle={arrowStyle}
          contentStyle={projectStyle}
          date={`${parseDate(pr.createdAt)} - ${pr.endedAt ? parseDate(pr.endedAt) : 'present'}`}
          iconStyle={iconStyle}
          icon={pr.icon || <FaAdn />}
        >
          <h3 className="vertical-timeline-element-title">{pr.name}</h3>
          <h4 className="vertical-timeline-element-subtitle">{pr.title}</h4>
          <p>
            {pr.description}
          </p>
          { pr.image && <div className="image">
            <picture>
              <source media="(max-width: 768px)" srcSet={`./image/${pr.image}_small.webp`} />
              <source media="(max-width: 960px)" srcSet={`./image/${pr.image}_medium.webp`} />
              <img src={`./image/${pr.image}_large.webp`} alt={`${pr.name} snapshot`} />
            </picture>
          </div> }          
          <p className="links">
            { pr.github && <a href={pr.github} target="_new">Source code</a> }
            { pr.livePreview && <a href={pr.livePreview} target="_new">Live preview</a> }
          </p>
          <div className="tags">{pr.tags.map(tag => {
            const cTag = tags[tag]

            return <span key={cTag.name} className={`tag ${cTag.class}`} onClick={(e) => handleTagClick(e)}>{cTag.name}</span>
          })}</div>
        </VerticalTimelineElement>) }
      </VerticalTimeline>
      { activeTag && <a href="#" className="show-all-projects" onClick={(e) => {
        e.preventDefault()

        setActiveTag(null)
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
      }}>Show all projects</a> }
    </>
  )
}

const parseDate = date => {
  const d = new Date(date)

  return `${d.getFullYear()} ${d.toLocaleString('default', { month: 'long' })}`
}

export default Projects