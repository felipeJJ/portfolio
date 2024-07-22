import NavBar from './navBar/NavBar'

export default function MainContent() {
    return (
        <section className="w-full overflow-scroll rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-700 lg:ml-8 lg:w-[80%] lg:pl-10">
            <div>
                <NavBar />
            </div>
        </section>
    )
}
