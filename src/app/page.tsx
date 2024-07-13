import MainContent from './components /MainContent'
import SideBar from './components /SideBar'

export default function Home() {
    return (
        <main className="flex h-screen w-screen overflow-scroll px-10 py-6">
            <SideBar />
            <MainContent />
        </main>
    )
}
