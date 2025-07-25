import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header>
            <div className="py-8 xl:py-12 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Brxle0<span className="text-accent">+</span>
                        </h1>
                    </Link>
                    {/* desktop nav */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav />
                        <Link href="/contact">
                            <Button>Hire me</Button>
                        </Link>
                    </div>
                    {/* mobile nav */}
                    <div className="xl:hidden">
                        {/* <Button> */}
                            <MobileNav />
                        {/* </Button> */}
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;