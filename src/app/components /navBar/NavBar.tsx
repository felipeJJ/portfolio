'use client'
import { useState } from 'react'
import Abaut from './sections/Abaut'
import Resume from './sections/Resume'
import Project from './sections/Projects'
import Contact from './sections/Contact'

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
            {/* Container div for the navigation bar */}
            <div className="flex justify-between">
                {/* Container div for the title */}
                <div className="h-full">
                    <div className="h-full content-end pt-8">
                        {/* Title based on the active tab */}
                        <h2 className="font-semibold">
                            {activeTab === 'Sobre'
                                ? 'Sobre mim'
                                : activeTab === 'Curriculo'
                                  ? 'Currículo'
                                  : activeTab === 'Projetos'
                                    ? 'Projetos'
                                    : 'Entre em contato'}
                        </h2>
                    </div>
                </div>
                {/* List of tabs */}
                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 gap-4 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-tr from-neutral-800 to-neutral-700 px-6 py-4">
                    {/* Loop through the tabs and render individual tab items */}
                    {['Sobre', 'Curriculo', 'Projetos', 'Contato'].map(
                        (tab: string) => (
                            // Individual tab item
                            <li key={tab} onClick={() => setActiveTab(tab)}>
                                {/* Tab link */}
                                <a
                                    className={
                                        // Conditional class based on active tab
                                        activeTab === tab
                                            ? 'text-amber-300'
                                            : ''
                                    }
                                >
                                    {tab}
                                </a>
                            </li>
                        ),
                    )}
                </ul>
            </div>
            {/* Line separator */}
            <div className="mt-3 h-1 w-12 bg-amber-300"></div>
            {/* Container div for the rendered component */}
            <div className="mb-10">{renderComponent()}</div>
        </>
    )
}
