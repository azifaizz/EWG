import { createFileRoute, notFound } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { OfferingPage } from "@/components/site/OfferingPage";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const o = SERVICES.find((s) => s.slug === params.slug);
    if (!o) throw notFound();
    return o;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | EWG – Elite Wealth & Growth` },
          { name: "description", content: loaderData.intro },
          { property: "og:title", content: `${loaderData.name} | EWG` },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [{ title: "Not found | EWG" }, { name: "robots", content: "noindex" }],
  }),
  component: function ServicePage() {
    return <OfferingPage o={Route.useLoaderData()} kind="Insurance" />;
  },
});
