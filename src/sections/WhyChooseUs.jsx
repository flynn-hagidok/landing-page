import { FaBuilding } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { RiFocus3Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const data = [
    {
        title: "Quality First",
        description: "We focus on delivering reliable and high-quality solutions that meet your expectatios.",
        icon: <FaBuilding size={40} />
    },
    {
        title: "Client Focus",
        description: "We focus on delivering reliable and high-quality solutions that meet your expectatios.",
        icon: <RiFocus3Line size={40} />
    },
    {
        title: "Modern Technology",
        description: "We focus on delivering reliable and high-quality solutions that meet your expectatios.",
        icon: <GrTechnology size={40} />
    },
    {
        title: "On-time Delivery",
        description: "We focus on delivering reliable and high-quality solutions that meet your expectatios.",
        icon: <TbTruckDelivery size={40} />
    },
]

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="min-h-screen scroll-mt-20 py-20 md:py-80 px-6 bg-blue-100">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-10">
                <div className="space-y-4 w-1/2">
                    <p className="uppercase text-blue-400 font-semibold">Why Choose Us</p>
                    <h2 className="text-3xl lg:4xl font-bold">Why Choose Biswas IT Firm?</h2>
                    <p className="opacity-80">We focus on delivering solutions that create real business value.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        data.map((item) =>
                            <div className="flex p-4 gap-4">
                                <div className="text-blue-600">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">{item.title}</h4>
                                    <p className="opacity-80">{item.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
};

export default WhyChooseUs;