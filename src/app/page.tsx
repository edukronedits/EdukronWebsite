export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Edukron</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Section title="Highlights" desc="Key features and achievements." />
        <Section title="Placements" desc="Our placement success stories." />
        <Section title="Student Journey" desc="Pathways for student growth." />
        <Section title="Featured Courses" desc="Explore our top courses." />
        <Section title="Testimonials" desc="Hear from our students." />
        <Section title="Success Stories" desc="Alumni achievements." />
        <Section title="Why Choose Us" desc="What sets us apart." />
        <Section title="Learning Path" desc="Your roadmap to success." />
        <Section title="Mentors" desc="Meet our expert mentors." />
        <Section title="Demo Sessions" desc="Try a free demo class." />
        <Section title="Upcoming Batches" desc="Next batch schedules." />
        <Section title="Achievements" desc="Awards and recognitions." />
        <Section title="Community" desc="Join our learning community." />
        <Section title="FAQs" desc="Frequently asked questions." />
      </div>
    </div>
  );
}

function Section({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
