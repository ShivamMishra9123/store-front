"use client"
import { Footer } from 'flowbite-react';
import Link from 'next/link';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Image from 'next/image';

export default function Footers() {

    const footerData = {
        "sections": [
            {
                "title": "OUR COMPANY",
                "image": "/trika.svg",
                "links": [
                    {
                        "text": "About",
                        "href": "#about"
                    },
                    {
                        "text": "Contact us",
                        "href": "#contact"
                    },
                    {
                        "text": "Trade Program",
                        "href": "#trade"
                    },
                    {
                        "text": "Privacy Policy",
                        "href": "#privacy"
                    },
                    {
                        "text": "Gift Certificate",
                        "href": "#gift"
                    },
                    {
                        "text": "Career",
                        "href": "#career"
                    }
                ]
            },
            {
                "title": "CUSTOMER SERVICE",
                "copyright": "trika",
                "links": [
                    {
                        "text": "Order Tracking",
                        "href": "#about"
                    },
                    {
                        "text": "Customer Satisfaction",
                        "href": "#contact"
                    },
                    {
                        "text": "Ordering/Payments",
                        "href": "#trade"
                    },
                    {
                        "text": "Return and Exchange",
                        "href": "#privacy"
                    },
                    {
                        "text": "My Account",
                        "href": "/"
                    },
                    {
                        "text": "Shipping Information",
                        "href": "#career"
                    }
                ]
            },
            {
                "title": "DESIGN TOSCANO RESOURCES",
                "links": [
                    {
                        "text": "Shop by Artist",
                        "href": "#about"
                    },
                    {
                        "text": "Free Catalog",
                        "href": "#contact"
                    },
                    {
                        "text": "Email Signup",
                        "href": "#trade"
                    },
                    {
                        "text": "Blog",
                        "href": "#privacy"
                    },
                    {
                        "text": "Accessibility",
                        "href": "#gift"
                    },
                    {
                        "text": "Terms of Use",
                        "href": "#career"
                    }
                ]
            }
        ]
    }

    return (
        <Footer >
            <div className="w-full bg-slate-200">
                <div className="bg-cyan-700 h-20">
                    <div className="mx-auto grid w-full gap-4 grid-cols-2 py-4 md:grid-cols-4">
                        <div className='flex justify-center items-center ml-16'>
                            <Link href={'/'}>
                                <Image
                                    className="items-center justify-center"
                                    src={'/trika.svg'}
                                    width={148}
                                    height={60}
                                    alt="Trika Fam"
                                />
                            </Link>
                        </div>
                        <div className='text-white font-extrabold flex justify-center items-center mr-20'>
                            EMAIL US
                        </div>
                        <div className='text-white font-extrabold flex justify-center items-center mr-12'>
                            CALL: 9123280720
                        </div>
                        <div className='text-white font-extrabold flex justify-center items-center'>
                            SIGN UP FOR EXCLUSIVE EMAIL OFFERS
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto grid w-3/4 grid-cols-1 py-4 md:grid-cols-4">
                {footerData.sections.map((section, index) => (
                    <div key={index}>
                        {/* <div className="bg-cyan-700 w-full h-20 md:px-10"></div> */}
                        <Footer.Title title={section.title} className='font-bold' />
                        {section.links.map((link, linkIndex) => (
                            <Footer.LinkGroup col className='my-4' key={linkIndex}>
                                <Footer.Link href={link.href}>
                                    {link.text}
                                </Footer.Link>
                            </Footer.LinkGroup>
                        ))}
                        {section.image &&
                            <div className='items-center md:px-10'>
                                <Link href={'/'}>
                                    <Image
                                        className="items-center justify-center"
                                        src={section.image}
                                        width={148}
                                        height={60}
                                        alt="Trika Fam"
                                    />
                                </Link>
                            </div>
                        }
                        {section.copyright &&
                            <div>
                                <div>
                                    <Link href={''} className='border-r border-black mr-2 text-xs'>term of use</Link>
                                    <Link href={''} className='border-r border-black mr-2 text-xs'>Privacy</Link>
                                    <Link href={''} className='text-xs'>term of use</Link>
                                </div>
                                <div className='w-3/4 mx-auto mt-2'>
                                    <Footer.Copyright
                                        className='font-extrabold text-lg'
                                        by="Trika™"
                                        href="#"
                                        year={2022}
                                    />
                                </div>
                            </div>
                        }
                        {
                            section.title === "DESIGN TOSCANO RESOURCES" &&
                            <>
                                <div className='font-bold text-base'>
                                    CONNECT WITH US AT:
                                </div>
                                <div className="mt-4 flex space-x-6  sm:justify-start">
                                    <Footer.Icon
                                        href="#"
                                        icon={BsFacebook}
                                    />
                                    <Footer.Icon
                                        href="#"
                                        icon={BsInstagram}
                                    />
                                    <Footer.Icon
                                        href="#"
                                        icon={BsTwitter}
                                    />
                                    <Footer.Icon
                                        href="#"
                                        icon={BsGithub}
                                    />
                                    <Footer.Icon
                                        href="#"
                                        icon={BsDribbble}
                                    />
                                </div>
                            </>
                        }
                    </div>
                ))}
                <div>
                    {/* <div className="bg-cyan-700 w- h-20 md:px-10"></div> */}
                    <div>
                        <input type='email' placeholder='ENTER YOUR EMAIL HERE' className='w-full h-10 justify-center items-center' />
                        <div>
                            <button className='bg-cyan-600 w-full h-10'>SUBMIT</button>
                        </div>
                        <div className="mt-6">
                            <Link href={'/'}>
                                <Image
                                    className="w-full"
                                    src={'/CatalogRequest.png'}
                                    width={148}
                                    height={60}
                                    alt="Trika Fam"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Footer >
    )
}