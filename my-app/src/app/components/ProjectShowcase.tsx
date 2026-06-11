"use client";

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
    key: string;
    media: string;
    mediaType: 'image' | 'video';
    link: string;
    title: string;
    description: string;
    categories: string[];
}

const servicesData: Service[] = [
    {
        key: 'creatures',
        media: '/images/CreatureCube.png',
        mediaType: 'image',
        link: 'https://creaturecubes.art/',
        title: 'Creatures Cube',
        description: 'Web3 NFT collection platform with seamless minting and trading capabilities.',
        categories: ['Web3', 'Web Apps']
    },
    {
        key: 'gliddy',
        media: '/assets/GliddyPng.png',
        mediaType: 'image',
        link: '/casestudies/gliddy',
        title: 'Gliddy',
        description: 'End-to-end event management platform targeted specifically for bartenders.',
        categories: ['Web Apps']
    },
    {
        key: 'sj-wellness',
        media: '/Projects/SJ.jpeg',
        mediaType: 'image',
        link: 'https://www.sjwellnessspa.com',
        title: 'SJ Wellness',
        description: 'Website designed and developed for Wellness Center',
        categories: ['Web Apps']
    },
    {
        key: 'tint-labs',
        media: '/Projects/TintLabs.jpeg',
        mediaType: 'image',
        link: 'https://www.tintlab.net',
        title: 'Tint Labs',
        description: 'Website designed for Car Tinting Business',
        categories: ['Web Apps']
    },
    {
        key: 'barcode',
        media: '/Projects/BarCode.png',
        mediaType: 'image',
        link: 'https://www.joinbarcode.io',
        title: 'Barcode',
        description: 'Web3-powered membership and community platform.',
        categories: ['Web3', 'Web Apps']
    },
    {
        key: 'blackw3b',
        media: '/Projects/BlackW3B.png',
        mediaType: 'image',
        link: 'https://www.w3bs.fun',
        title: 'BlackW3B',
        description: 'Decentralized web3 platform for goldback tokens.',
        categories: ['Web3', 'Web Apps']
    },
    {
        key: 'prmnt-pro',
        media: '/Projects/PRMNT.jpeg',
        mediaType: 'image',
        link: 'https://www.prmntpro.com',
        title: 'Preeminent Professional Services',
        description: 'Website designed, developed, and maintained for facility management services.',
        categories: ['Web Apps']
    },
    {
        key: 'mcbride',
        media: '/Projects/McBride.png',
        mediaType: 'image',
        link: 'https://www.mcbridebasketballacademy.org',
        title: 'McBride Basketball Academy',
        description: 'Booking platform with Stripe payments, Google Calendar sync, and admin dashboard for session management.',
        categories: ['Web Apps']
    },
    {
        key: 'boxraw',
        media: '/Projects/BoxRaw.png',
        mediaType: 'image',
        link: '#',
        title: 'BoxRaw Labs',
        description: 'Video labeling platform for boxing analysis with multi-camera sync, team workflows, and automated clip export.',
        categories: ['Web Apps']
    }
];

const categories = ["All", "Web3", "Web Apps", "Mobile", "AI Automations"];

export default function ProjectShowcase() {
    const [activeCategory, setActiveCategory] = useState("All");

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: false,
            containScroll: false
        },
        [
            AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true
            })
        ]
    );

    useEffect(() => {
        if (!emblaApi) return;

        const autoScroll = emblaApi.plugins()?.autoScroll;
        if (autoScroll) {
            if (activeCategory === "All") {
                autoScroll.play();
            } else {
                // Optional: Stop auto-scroll when filtered to make it easier to view specific items
                // autoScroll.stop(); 
                // Or keep playing:
                autoScroll.play();
            }
        }

        // Reset to start when category changes
        emblaApi.scrollTo(0);

        // Add dragging state feedback
        const emblaNode = emblaApi.rootNode();

        const addDraggingClass = () => {
            emblaNode.classList.add('is-dragging');
        };

        const removeDraggingClass = () => {
            emblaNode.classList.remove('is-dragging');
        };

        emblaApi.on('pointerDown', addDraggingClass);
        emblaApi.on('pointerUp', removeDraggingClass);

        return () => {
            emblaApi.off('pointerDown', addDraggingClass);
            emblaApi.off('pointerUp', removeDraggingClass);
        };
    }, [emblaApi, activeCategory]);

    const filteredServices = activeCategory === "All"
        ? servicesData
        : servicesData.filter(service => service.categories.includes(activeCategory));

    return (
        <section className=" px-0 bg-white overflow-hidden my-24 border-b border-black/5 ">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-16 px-6">
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-6">
                        Selected Work
                    </h2>
                    <p className="text-xl text-gray-500 font-light tracking-wide max-w-2xl mx-auto mb-8">
                        Oncode Software
                    </p>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div
                        className="overflow-hidden cursor-grab active:cursor-grabbing [&.is-dragging]:cursor-grabbing"
                        ref={emblaRef}
                    >
                        <div className="flex select-none">
                            {filteredServices.length > 0 ? (
                                filteredServices.map((service, index) => (
                                    <div
                                        key={`${service.key}-${index}`}
                                        className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                                    >
                                        <div className="relative h-[600px] group overflow-hidden border-r border-white/10">
                                            {/* Background Media (Image or Video) */}
                                            {service.mediaType === 'video' ? (
                                                <div className="absolute inset-0">
                                                    <video
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                    >
                                                        <source src={service.media} type="video/mp4" />
                                                    </video>
                                                    {/* Overlay Gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                                </div>
                                            ) : (
                                                <div className="absolute inset-0">
                                                    <Image
                                                        src={service.media}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    {/* Overlay Gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="relative h-full flex flex-col justify-end p-10">
                                                <div className="mb-4">
                                                    <span className="text-xs font-medium text-white/70 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                                        {service.categories[0]}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-light mb-4 leading-tight text-white">
                                                    {service.title}
                                                </h3>
                                                <p className="text-base font-light mb-8 leading-relaxed text-white/90 max-w-md">
                                                    {service.description}
                                                </p>
                                                <Link
                                                    href={service.link}
                                                    className="inline-flex items-center text-sm font-medium hover:gap-3 transition-all duration-300 group/link cursor-pointer text-white uppercase tracking-wider"
                                                >
                                                    <span className="mr-2">View Project</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="w-full text-center py-20 text-gray-500">
                                    No projects found in this category.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
