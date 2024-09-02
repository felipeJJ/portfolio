import Image from 'next/image'
import {
    BiLogoTypescript,
    BiLogoTailwindCss,
    BiLogoNodejs,
} from 'react-icons/bi'
import { RiNextjsLine, RiGithubFill } from 'react-icons/ri'
import { SiMongodb, SiPostgresql } from 'react-icons/si'

export default function Project() {
    return (
        <>
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
            <div className="mt-10 grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-1">
                <div className="card bg-base-100 bg-transparent shadow-xl lg:mt-0">
                    <figure className="cursor-pointer">
                        <Image
                            width={407}
                            height={228}
                            src="https://github.com/user-attachments/assets/5fefc0e1-7d8f-4c49-8790-14e62ec9671e"
                            alt="projeto 3"
                            onClick={() =>
                                window.open(
                                    'https://click-beard-jorge-felipe.vercel.app/',
                                )
                            }
                        />
                    </figure>
                    <div className="card-body p-5 lg:p-8">
                        <h2 className="card-title justify-center">
                            Barbados barbershop
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div className="card-actions mt-4 w-full justify-center">
                            <div className="badge w-1/2 justify-between border-hidden bg-transparent">
                                <RiNextjsLine size={25} />
                                <BiLogoTypescript size={25} />
                                <BiLogoNodejs size={25} />
                                <SiPostgresql size={23} />
                                <BiLogoTailwindCss size={25} />
                            </div>
                        </div>
                        <div className="card-actions mt-5 justify-center">
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://github.com/felipeJJ/Click_Beard_Jorge_Felipe?tab=readme-ov-file',
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
        </>
    )
}
