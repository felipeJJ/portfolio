import NavBar from './navBar/NavBar'

export default function MainContent() {
    return (
        <section className="ml-8 w-[80%] overflow-y-hidden rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-700 pl-8">
            <div>
                <NavBar />
            </div>
        </section>
    )
}
