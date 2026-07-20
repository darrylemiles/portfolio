import projectsJson from '../data/projects.json'
import type { Project, ProjectViewModel } from '../types/project'

const assetModules = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const projects = projectsJson as Project[]

export const slugifyProjectTitle = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

export const resolveProjectImage = (basePath = ''): string => {
  if (!basePath) return ''

  const normalizedPath = basePath
    .replace(/\\/g, '/')
    .replace(/^(\.\.\/)+assets\//, '../assets/')

  const matchKey = Object.keys(assetModules).find((key) => key.startsWith(normalizedPath))

  return matchKey ? assetModules[matchKey] : ''
}

export const formatProjectPeriod = (startDate: string, endDate: string) => {
  const formatter = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return `${startDate} - ${endDate}`
  }

  return `${formatter.format(start)} - ${formatter.format(end)}`
}

export const getProjects = (): ProjectViewModel[] =>
  projects.map((project) => {
    const thumbnail = project.images.find((image) => image.isThumbnail) ?? project.images[0]

    return {
      ...project,
      slug: slugifyProjectTitle(project.title),
      period: formatProjectPeriod(project.startDate, project.endDate),
      thumbnailSrc: resolveProjectImage(thumbnail?.thumbnail),
      imageSources: project.images.map((image) => resolveProjectImage(image.original)).filter(Boolean),
    }
  })

export const getProjectBySlug = (slug = '') =>
  getProjects().find((project) => project.slug === decodeURIComponent(slug).toLowerCase())
