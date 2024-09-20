import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Entry from "app/pages/Entry";
import Scenario from "app/pages/Scenario";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Entry/>}/>
        <Route path=':id' element={<Scenario/>}/>
      </Route>,
    ),
  )
  return <RouterProvider router={router}/>
}

export default Routes;