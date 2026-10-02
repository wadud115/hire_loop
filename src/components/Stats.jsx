import {
  BriefcaseBusiness,
  Building2,
  UsersRound,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    number: "50K",
    title: "Active Jobs",
  },
  {
    icon: Building2,
    number: "12K",
    title: "Companies",
  },
  {
    icon: UsersRound,
    number: "2M",
    title: "Job Seekers",
  },
  {
    icon: Star,
    number: "97%",
    title: "Satisfaction Rate",
  },
];

const ImpactSection = () => {
  return (
    <section className="relative min-h-[750px] overflow-hidden bg-black py-20">

      {/* Globe Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('/globe.png')] bg-cover bg-center bg-no-repeat opacity-70"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-1/3 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl pt-20 text-center">

          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
            Our Impact
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Assisting over{" "}
            <span className="text-indigo-400">15,000</span> job seekers
            <br />
            find their dream positions.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            We are on a mission to connect talented people with great
            opportunities around the world.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-20 mx-auto mt-20 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-black/70"
              >

                {/* Icon */}
                <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500/20">
                  <Icon size={22} />
                </div>

                {/* Number */}
                <h3 className="text-4xl font-semibold tracking-tight text-white">
                  {stat.number}
                </h3>

                {/* Title */}
                <p className="mt-2 text-sm text-gray-400">
                  {stat.title}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;