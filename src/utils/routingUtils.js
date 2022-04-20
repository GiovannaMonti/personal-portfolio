export const getProjectUrlParam = (project) => {
  return `#${project}`
}

export function goToProject(project) {
  return (window.location.hash = getProjectUrlParam(project))
}
