

const data = [
    {
        id: "01",
        title: "Discover",
        description: "We understand your business goals, challenges, and requirements."
    },
    {
        id: "02",
        title: "Plan",
        description: "We understand your business goals, challenges, and requirements."
    },
    {
        id: "03",
        title: "Build",
        description: "We understand your business goals, challenges, and requirements."
    },
    {
        id: "04",
        title: "Deliver",
        description: "We understand your business goals, challenges, and requirements."
    },
]

const Process = () => {
    return (
        <section id="process" className="min-h-screen scroll-mt-20 py-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="space-y-2">
                    <p className="uppercase text-blue-400 font-semibold">Our Process</p>
                    <h2 className="text-3xl lg:4xl font-bold">How We Work</h2>
                    <p className="opacity-80">A Simple Process From Idea to Launch</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 gap-6">
                    {
                        data.map(item =>
                            <div className="space-y-2">
                                <p className="font-bold text-4xl text-blue-600 w-18 p-4 bg-blue-200 text-center rounded-4xl">{item.id}</p>
                                <h2 className="font-bold text-xl">{item.title}</h2>
                                <p className="opacity-80">{item.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
};

export default Process;