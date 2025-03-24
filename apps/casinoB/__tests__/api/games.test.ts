
import { GET } from "app/api/games/[slug]/route";
import { describe, it, expect } from "vitest";

/* 
    this is just a setup that everything works, I am going to focus more on testing the component.
*/
describe("GET /api/games/[slug]", () => {
  it("should return game details for a valid slug", async () => {
    expect(true).toBe(true);
  });

  it("should return 404 for an invalid slug", async () => {
    expect(true).toBe(true);
  });
});
