import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'
import { AboutMe } from '../components/AboutMe'
import { Contact } from '../components/Contact'

import { HomeApiDoc } from '../components/api-doc/HomeApiDoc'
import { HowTo } from '../components/api-doc/HowTo'
import { ApiMe } from '../components/api-doc/ApiMe'
import { ApiAbout } from '../components/api-doc/ApiAbout'
import { ApiExperience } from '../components/api-doc/ApiExperience'
import { ApiStudy } from '../components/api-doc/ApiStudy'
import { ApiProjects } from '../components/api-doc/ApiProjects'
import { ApiContact } from '../components/api-doc/ApiContact'

import { Error404 } from '../components/Error404'
import { LiveResume } from '../components/live-resume/LiveResume'



export const AppRouter = () =>
{
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<MainLayout />}>

                    <Route path='/' element={<HomeApiDoc />}>
                        <Route index element={<HowTo />} />
                    </Route>

                    <Route path='api' element={<HomeApiDoc />}>
                        <Route index element={<HowTo />} />
                        <Route path='how-to' element={<HowTo />} />
                        <Route path='me' element={<ApiMe />} />
                        <Route path='about' element={<ApiAbout />} />
                        <Route path='experience' element={<ApiExperience />} />
                        <Route path='study' element={<ApiStudy />} />
                        <Route path='project' element={<ApiProjects />} />
                        <Route path='contact' element={<ApiContact />} />
                    </Route>

                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Error404 />} />

                </Route>
                <Route path='live-resume' element={<LiveResume />} />
            </Routes>

        </BrowserRouter>
    )
}
