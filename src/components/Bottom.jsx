import React from 'react'
import { Link } from 'react-router-dom'

function Bottom() {
  const footerSections = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing"],
    },
    {
      title: "Movies",
      links: ["Categories", "Devices", "Pricing"],
    },
    {
      title: "Shows",
      links: ["Categories", "Devices", "Pricing"],
    },
    {
      title: "Support",
      links: ["Categories", "Devices", "Pricing"],
    },
    {
      title: "Subscription",
      links: ["Categories", "Devices", "Pricing"],
    },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-360 px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="mb-1 text-base font-bold sm:text-lg">
                {section.title}
              </h3>

              {section.links.map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="text-sm text-white/70 transition hover:text-white sm:text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-sm text-white/50 sm:text-left">
          © 2026 TioMovie. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Bottom