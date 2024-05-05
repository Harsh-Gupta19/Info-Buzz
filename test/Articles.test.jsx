import { screen, vitest, describe, it, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import Articles from "../src/components/Articles";
import ArticleItem from "../src/components/ArticleItem";

// Mocking fetch function
global.fetch = vitest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ results: [] }),
  })
);

describe("Articles Component", () => {
  it("renders loading message while fetching data", async () => {
    const { getByText } = render(<Articles />, {
      mockData: { durationId: "1" }, // Mocking durationId from ArticleContext
    });
    expect(getByText("Fetching the data...")).toBeInTheDocument();
  });

  it("renders no articles message when no data available", async () => {
    const { getByText } = render(<ArticleItem articles={[]}/>, {
      mockData: { durationId: "1" }, // Mocking durationId from ArticleContext
    });
    await waitFor(() =>
      expect(getByText("No Articles available...")).toBeInTheDocument()
    );
  });
});
