'use client'
import { useState } from 'react'
import Abaut from './sections/Abaut'
import Resume from './sections/Resume'
import Project from './sections/Projects'
import Contact from './sections/contact'

export default function NavBar(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>('Sobre')

    /**
     * Renders the component corresponding to the active tab.
     * @returns JSX.Element | null
     */
    const renderComponent = (): JSX.Element | null => {
        switch (activeTab) {
            case 'Sobre':
                return <Abaut />
            case 'Curriculo':
                return <Resume />
            case 'Projetos':
                return <Project />
            case 'Contato':
                return <Contact />
            default:
                return null
        }
    }

    return (
        <>
            <div>{renderComponent()}</div>
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 gap-4 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-tr from-neutral-800 to-neutral-700 px-6 py-4">
                {['Sobre', 'Curriculo', 'Projetos', 'Contato'].map(
                    (tab: string) => (
                        <li key={tab} onClick={() => setActiveTab(tab)}>
                            <a
                                className={
                                    activeTab === tab ? 'text-amber-300' : ''
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ),
                )}
            </ul>
        </>
    )
}
