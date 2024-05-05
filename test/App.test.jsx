import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from '../src/App';
import { ArticleContextProvider } from '../src/store/ArticleContext';

describe('App Component', () => {
  it('renders Header and Articles components wrapped in ArticleContextProvider', () => {
    const { getByRole } = render(
      <ArticleContextProvider>
        <App />
      </ArticleContextProvider>
    );

    const headerElement = getByRole('heading', { name: /New York Times/i });
    expect(headerElement).toBeInTheDocument();
  });
});
