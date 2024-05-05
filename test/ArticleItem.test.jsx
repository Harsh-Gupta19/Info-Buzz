import { screen, describe, it, expect, vitest } from "vitest";
import { render } from "@testing-library/react";
import ArticleItem from '../src/components/ArticleItem';

const mockArticle = {
  id: 1,
  title: 'Sample Article',
  abstract: 'Sample abstract',
  media: [
    {
      'media-metadata': [
        { url: 'image1.jpg', height: 150 },
        { url: 'image2.jpg', height: 250 },
        { url: 'image3.jpg', height: 300 },
      ],
      caption: 'Sample Caption',
    },
  ],
};

const mockArticles = [mockArticle, mockArticle];

describe('ArticleItem Component', () => {
  it('renders article items correctly', () => {
    const { getAllByRole, getByAltText } = render(<ArticleItem isLoading={false} articles={mockArticles} />);
    const articleItems = getAllByRole('listitem');
    expect(articleItems).toHaveLength(mockArticles.length);

    articleItems.forEach((item, index) => {
      const article = mockArticles[index];
      expect(item).toHaveTextContent(article.title);
      expect(item).toHaveTextContent(article.abstract);
    });
  });

  it('renders no articles message when no articles are available', () => {
    const { getByText } = render(<ArticleItem isLoading={false} articles={[]} />);
    const noArticlesMessage = getByText('No Articles available...');
    expect(noArticlesMessage).toBeInTheDocument();
  });

  it('renders loading message when isLoading is true', () => {
    const { getByText } = render(<ArticleItem isLoading={false} articles={[]} />);
    const loadingMessage = getByText('No Articles available...');
    expect(loadingMessage).toBeInTheDocument();
  });
});
