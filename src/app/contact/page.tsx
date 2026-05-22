import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  const { personal, socialLinks } = portfolioData;
  const socialItems = [
    { label: "GitHub", url: socialLinks.github },
    { label: "LinkedIn", url: socialLinks.linkedin },
    { label: "X (Twitter)", url: socialLinks.twitter },
    { label: "Website", url: socialLinks.website },
  ].filter((item) => item.url && item.url !== "#");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black md:text-4xl">Contact</h1>
      <p className="max-w-2xl text-base leading-relaxed text-black/80">
        I am open to AI engineering and full-stack development opportunities.
        Reach out by email or connect with me on available social platforms.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="card space-y-2">
          <h2 className="text-xl font-bold">Direct Contact</h2>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> {personal.email}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> {personal.phone}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Location:</span> {personal.location}
          </p>
        </article>

        <article className="card space-y-2">
          <h2 className="text-xl font-bold">Social Links</h2>
          {socialItems.length ? (
            socialItems.map((item) => (
              <a
                key={item.label}
                className="link-inline block"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))
          ) : (
            <p className="text-sm text-black/70">Social links will be added soon.</p>
          )}
        </article>
      </div>
    </div>
  );
}
