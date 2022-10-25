import React from 'react'
import { Routes } from 'react-router-dom'
import routeCreator from './../utils/routeCreators'
import mainRoutes from './mainRoutes'

function routes() {
  return (
    <>
      <Routes>{routeCreator(mainRoutes)}</Routes>
    </>
  )
}

export default routes
