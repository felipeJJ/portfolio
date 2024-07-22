import Image from 'next/image'
import {
    BiLogoTypescript,
    BiLogoTailwindCss,
    BiLogoNodejs,
} from 'react-icons/bi'
import { RiNextjsLine, RiGithubFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'

export default function Project() {
    return (
        <div className="flex-col lg:mt-16 lg:flex lg:flex-row lg:justify-evenly">
            <div className="card bg-base-100 bg-transparent shadow-xl lg:w-5/12">
                <figure className="cursor-pointer">
                    <Image
                        width={407}
                        height={228}
                        src="https://github.com/felipeJJ/e-commerce-admin/assets/43899843/2191667b-f267-4931-a97c-2cf8f146abe5"
                        alt="projeto 1"
                        onClick={() =>
                            window.open(
                                'https://e-commerce-website-omega-two.vercel.app/',
                            )
                        }
                    />
                </figure>
                <div className="card-body p-5 lg:p-9">
                    <h2 className="card-title justify-center">
                        E-commerce Website
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions mt-4 w-full justify-center">
                        <div className="badge w-1/2 justify-between border-hidden bg-transparent">
                            <RiNextjsLine size={25} />
                            <BiLogoTypescript size={25} />
                            <BiLogoNodejs size={25} />
                            <SiMongodb size={25} />
                            <BiLogoTailwindCss size={25} />
                        </div>
                    </div>
                    <div className="card-actions mt-5 justify-center">
                        <button
                            onClick={() =>
                                window.open(
                                    'https://github.com/felipeJJ/e-commerce-website',
                                )
                            }
                            className="btn border-stone-600 bg-transparent shadow-xl"
                        >
                            <RiGithubFill size={20} />
                            Visite o projeto
                        </button>
                    </div>
                </div>
            </div>
            <div className="card mt-10 bg-base-100 bg-transparent shadow-xl lg:mt-0 lg:w-5/12">
                <figure>
                    <Image
                        width={407}
                        height={228}
                        src="https://github.com/felipeJJ/e-commerce-admin/assets/43899843/0ca79455-7cd5-4b76-8a01-aa7501bca1c7"
                        alt="projeto 2"
                    />
                </figure>
                <div className="card-body p-5 lg:p-8">
                    <h2 className="card-title justify-center">
                        E-commerce Admin
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions mt-4 w-full justify-center">
                        <div className="badge w-1/2 justify-between border-hidden bg-transparent">
                            <RiNextjsLine size={25} />
                            <BiLogoTypescript size={25} />
                            <BiLogoNodejs size={25} />
                            <SiMongodb size={25} />
                            <BiLogoTailwindCss size={25} />
                        </div>
                    </div>
                    <div className="card-actions mt-5 justify-center">
                        <button
                            onClick={() =>
                                window.open(
                                    'https://github.com/felipeJJ/e-commerce-admin',
                                )
                            }
                            className="btn border-stone-600 bg-transparent shadow-xl"
                        >
                            <RiGithubFill size={20} />
                            Visite o projeto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
