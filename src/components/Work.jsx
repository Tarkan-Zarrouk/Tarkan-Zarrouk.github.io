export default function Work() {
  return (
    <section
      className="mx-auto max-w-[1280px] px-[42px] pb-[155px] pt-[128px] max-md:px-[22px] max-md:pb-[95px] max-md:pt-[90px]"
      id="work"
    >
      <div className="mb-[54px] animate-rise">
        <h2 className="mt-[25px] text-[clamp(42px,5vw,65px)] font-bold leading-none tracking-[-0.08em]">
          Experience
        </h2>
      </div>
      <div className="border-t border-line">
        <article className="grid grid-cols-[1fr_180px] gap-7 border-b border-line py-[35px] transition-all hover:bg-lime/[0.12] hover:pl-[14px] max-md:grid-cols-1">
          <div>
            <h3 className="my-[9px] text-[42px] font-bold tracking-[-0.07em]">
              Kaie
            </h3>
            <p className="max-w-[600px] text-sm leading-[1.8] text-muted">
              Built and shipped user profile management features, responsive UI
              components, and an interactive Explore page. Developed reusable
              frontend components and refined navigation and user flows to
              improve usability and maintainability. Migrated 2,000+ user
              records to a new database, supporting data integrity and a smooth
              transition. Contributed across feature development, testing,
              debugging, and iteration in a fast-moving startup environment.
            </p>
          </div>
        </article>
        <article className="grid grid-cols-[1fr_180px] gap-7 border-b border-line py-[35px] transition-all hover:bg-lime/[0.12] hover:pl-[14px] max-md:grid-cols-1">
          <div>
            <h3 className="my-[9px] text-[42px] font-bold tracking-[-0.07em]">
              Code Ninjas
            </h3>
            <p className="max-w-[600px] text-sm leading-[1.8] text-muted">
              Taught programming fundamentals to students aged 6–13, adapting
              lessons to different ages and skill levels. Led hands-on coding
              activities and supported students with debugging and step-by-step
              problem-solving, encouraging independent thinking and
              experimentation. Managed collaborative learning environments of up
              to 30 students and instructors, working with a team of 2–4
              colleagues to coordinate lessons and support students.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
