import MainContent from './components /MainContent'
import SideBar from './components /SideBar'

export default function Home() {
    return (
        <main className="h-full w-full overflow-scroll px-10 py-6 lg:flex">
            <SideBar />
            <MainContent />
        </main>
    )
}
