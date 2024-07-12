'use client'
import { useState } from 'react'
import Abaut from './sections/Abaut'
import Resume from './sections/Resume'
import Project from './sections/Projects'
import Contact from './sections/contact'

/**
 * The NavBar component represents the navigation bar of the application.
 * It displays a list of tabs and the corresponding active component based on the selected tab.
 * @returns JSX.Element
 */
export default function NavBar(): JSX.Element {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState<string>('Sobre')

    /**
     * Renders the component corresponding to the active tab.
     * @returns JSX.Element | null
     */
    const renderComponent = (): JSX.Element | null => {
        // Switch statement to determine which component to render based on the active tab
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

    // JSX structure of the NavBar component
    return (
        <>
            {/* Container div for the rendered component */}
            <div>{renderComponent()}</div>
            {/* List of tabs */}
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 gap-4 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-tr from-neutral-800 to-neutral-700 px-6 py-4">
                {['Sobre', 'Curriculo', 'Projetos', 'Contato'].map(
                    (tab: string) => (
                        // Individual tab item
                        <li key={tab} onClick={() => setActiveTab(tab)}>
                            {/* Tab link */}
                            <a
                                className={
                                    // Conditional class based on active tab
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
