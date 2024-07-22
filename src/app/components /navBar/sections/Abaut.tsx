import { IoLogoReact, IoLogoPython } from 'react-icons/io5'
import {
    BiLogoTypescript,
    BiLogoTailwindCss,
    BiLogoNodejs,
} from 'react-icons/bi'
import { RiNextjsLine } from 'react-icons/ri'
import { SiMysql, SiMongodb, SiExpress, SiJest } from 'react-icons/si'

export default function Abaut() {
    return (
        <>
            <p>
                Desenvolvedor web com foco em TypeScript, tenho como principal
                tecnologia o NextJS. Tenho experiência sólida em diversas
                tecnologias do mercado, incluindo Next.js, TypeScript, Python,
                Tailwind, CSS, MySQL, Express, MongoDB, Node.js e Jest.
            </p>
            <p className="mt-3">Principais qualificações:</p>
            <p className="mt-3">
                - Desenvolvimento colaborativo de aplicações web com Next.js e
                TypeScript, contribuindo para o sucesso dos projetos.
            </p>
            <p className="mt-3">
                - Aprendizado rápido e adaptação a novas tecnologias, buscando
                constantemente aprimorar minhas habilidades.
            </p>
            <p className="mt-3">
                - Criação de interfaces responsivas e modernas com focado em
                focado em experiências de usuário atraentes e intuitivas.
            </p>
            <p className="mt-3">
                - Integração eficiente de APIs de terceiros, manipulando dados
                externos de forma segura.
            </p>
            <p className="mt-3">
                - Criação e manutenção de APIs REST utilizando Express, MySQL e
                MongoDB, contribuindo para sistemas robustos e escaláveis.
            </p>
            <p className="mt-3">
                - Implementação de testes automatizados com Jest, assegurando a
                qualidade e a funcionalidade do código.
            </p>
            <div className="mt-10">
                <h3>Frameworks e tecnologias:</h3>
                <div className="mt-5 flex h-fit w-full rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-700 px-2 pb-4 pt-4 text-amber-300 lg:justify-between lg:px-10">
                    <IoLogoReact size={30} />
                    <RiNextjsLine size={30} />
                    <BiLogoTypescript size={30} />
                    <IoLogoPython size={30} />
                    <BiLogoNodejs size={30} />
                    <SiMysql size={30} />
                    <SiMongodb size={30} />
                    <SiExpress size={30} />
                    <BiLogoTailwindCss size={30} />
                    <SiJest size={30} />
                </div>
            </div>
        </>
    )
}
