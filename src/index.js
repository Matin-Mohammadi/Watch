import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter , Routes , Route} from "react-router-dom"

import "../src/App.css"
import App from "./App"
import Classics from './Components/Classics'
import News from "./Components/News"
import Watches from "./Components/Watches"
import Watch from "./Components/Watchh"

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App></App>}>
                    <Route path='/classics' element={<Classics></Classics>}></Route>
                    <Route path='/news' element={<News></News>}></Route>
                    <Route path='/watches' element={<Watches></Watches>}>
                        <Route path=":watchId" element={<Watch></Watch>}></Route>
                    </Route>
                </Route>
                <Route path='*' element={<App></App>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

