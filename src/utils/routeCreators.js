import React from 'react'
import { Route } from 'react-router-dom'

function routeCreator(routes) {
  const renderedResults = []

  routes.forEach((route) => {
    let hasSeenIndex = false
    const { subRoute, element, path, isIndex } = route

    if (!subRoute) {
      renderedResults.push(
        <Route
          key={path}
          element={element}
          path={path}
          index={isIndex && !hasSeenIndex}
        />,
      )
    } else if (Array.isArray(subRoute)) {
      renderedResults.push(
        <Route key={path} element={element} path={path} index={isIndex}>
          {routeCreator(subRoute)}
        </Route>,
      )
    }
    hasSeenIndex = isIndex && !hasSeenIndex
  })

  return renderedResults
}

export default routeCreator
