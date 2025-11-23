"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoCarousel = () => {
    const logos = [
        { src: "/Logos/BlackLogoNew.svg", alt: "Company Logo", type: "svg" },
        { src: "/Logos/SEGRAY.png", alt: "SEGRAY", type: "png" },
        { src: "/Logos/PreLogo.jpg", alt: "Company Logo", type: "jpg" },
        { src: "/Logos/BARCODE Favicon.PNG", alt: "Barcode", type: "png" },
        { src: "/Logos/TintLabs.png", alt: "Tint Labs", type: "png" },
    ];

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full bg-white py-12 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Text */}
                <p className="text-center text-sm text-black/50 font-light mb-8 uppercase tracking-wide">
                    Trusted by innovative companies
                </p>

                {/* Logo Carousel */}
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{
                            x: [0, -33.333333 * 100 + "%"], // Move by one-third (one set of logos)
                        }}
                        transition={{
                            duration: 1650,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 h-12 w-32 relative transition-all duration-300 opacity-60 hover:opacity-100"
                                style={{
                                    filter: 'grayscale(100%)',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain grayscale"
                                    sizes="128px"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
