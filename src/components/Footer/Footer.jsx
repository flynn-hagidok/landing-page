

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Biswas IT. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a
                            href="#about"
                            className="transition-colors hover:text-blue-600"
                        >
                            About
                        </a>

                        <a
                            href="#services"
                            className="transition-colors hover:text-blue-600"
                        >
                            Services
                        </a>

                        <a
                            href="#contact"
                            className="transition-colors hover:text-blue-600"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;