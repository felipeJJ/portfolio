import Image from 'next/image'
import avatar from '../utils/avatar.png'
import { MdOutlineEmail } from 'react-icons/md'
import {
    IoPhonePortraitOutline,
    IoLocationOutline,
    IoLogoLinkedin,
    IoLogoGithub,
} from 'react-icons/io5'

/**
 * SideBar component that displays personal information, contact details,
 * and social media links.
 *
 * It includes an avatar, name, profession, contact information (email, phone, location),
 * and links to LinkedIn and GitHub profiles.
 */
export default function SideBar() {
    return (
        // SideBar container with gradient background
        <section className="mb-10 flex h-fit w-full flex-col place-items-center gap-6 rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-700 p-8 lg:mb-0 lg:w-[20%]">
            {/* Avatar container */}
            <div className="w-fit rounded-2xl bg-neutral-700 px-2 pb-3">
                <Image src={avatar} width={100} height={100} alt="Avatar" />
            </div>
            {/* Name and profession container */}
            <div className="flex flex-col place-items-center">
                <h1 className="mb-4 text-lg font-bold">Jorge Felipe</h1>
                <p className="rounded-xl bg-neutral-700 px-4 py-2 text-xs font-light">
                    Desenvolvedor full stack
                </p>
            </div>
            {/* Separator line */}
            <div className="h-[1.5px] w-full bg-neutral-700"></div>
            {/* Contact information list */}
            <div className="">
                <ul>
                    {/* Email contact item */}
                    <li className="mb-4 flex min-w-full items-center gap-4">
                        <a
                            className="max-h-fit max-w-fit rounded-xl bg-gradient-to-tr from-neutral-800 to-neutral-700 p-4 text-amber-300 shadow-inner shadow-neutral-700"
                            href="mailto:jorgefelipe11@hotmail.com"
                        >
                            <MdOutlineEmail />
                        </a>
                        <div className="text-xs">
                            <p className="mb-1 text-xs font-bold text-neutral-500">
                                EMAIL
                            </p>
                            <a href="mailto:jorgefelipe11@hotmail.com">
                                jorgefelipe11@hotmail.com
                            </a>
                        </div>
                    </li>
                    {/* Phone contact item */}
                    <li className="mb-4 flex min-w-full items-center gap-4">
                        <a
                            className="max-h-fit max-w-fit rounded-xl bg-gradient-to-tr from-neutral-800 to-neutral-700 p-4 text-amber-300 shadow-inner shadow-neutral-700"
                            href="tel:+5573998088530"
                        >
                            <IoPhonePortraitOutline />
                        </a>
                        <div className="text-xs">
                            <p className="mb-1 text-xs font-bold text-neutral-500">
                                CELULAR
                            </p>
                            <a href="tel:+5573998088530">
                                +55 (73) 99808-8530{' '}
                            </a>
                        </div>
                    </li>
                    {/* Location contact item */}
                    <li className="flex min-w-full items-center gap-4 pb-2">
                        <div className="max-h-fit max-w-fit rounded-xl bg-gradient-to-tr from-neutral-800 to-neutral-700 p-4 text-amber-300 shadow-inner shadow-neutral-700">
                            <IoLocationOutline />
                        </div>
                        <div className="text-xs">
                            <p className="mb-1 text-xs font-bold text-neutral-500">
                                LOCAL
                            </p>
                            <address className="text-white">
                                Vila Velha, ES, Brasil
                            </address>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Social media links */}
            <div>
                <ul className="flex items-center justify-start gap-4 pl-2">
                    {/* LinkedIn profile link */}
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jorge-felipe-413b78152/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoLinkedin size={22} />
                        </a>
                    </li>
                    {/* GitHub profile link */}
                    <li>
                        <a
                            href="https://github.com/felipeJJ"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoGithub size={22} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
