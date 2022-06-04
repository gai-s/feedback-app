import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackFrom from './components/FeedbackFrom'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){

    return(
        <FeedbackProvider>
        <Router>
            <>
                <Header text='Royalty comments Only' sub_text='Dorothy Parker'/>
                <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackFrom />
                            <FeedbackStats />
                            <FeedbackList  />
                            <AboutIconLink />
                        </>
                    }
                    />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
                </div>
            </>
        </Router>
        </FeedbackProvider>
    )}
export default App