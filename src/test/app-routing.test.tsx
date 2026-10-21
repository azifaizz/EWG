import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches a page for / instead of falling back to root", () => {
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/");
  });

  it("matches core insurance service routes", () => {
    const serviceRoutes = [
      "/services",
      "/services/life-insurance",
      "/services/term-insurance",
      "/services/health-insurance",
      "/services/motor-insurance",
      "/services/travel-insurance",
      "/services/business-insurance",
    ];

    for (const path of serviceRoutes) {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });

  it("matches partner and static information routes", () => {
    const staticRoutes = [
      "/about",
      "/contact",
      "/faqs",
      "/partners",
      "/become-an-advisor",
      "/business-partner",
      "/callback",
      "/privacy",
      "/terms",
      "/disclaimer",
      "/grievance",
    ];

    for (const path of staticRoutes) {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});
