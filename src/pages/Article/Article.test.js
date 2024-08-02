import { render, screen } from "@testing-library/react";
import Article from "./Article";
import { mockData } from "../../mockData/data";
const mockArticleData = mockData.results[0]

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: mockArticleData,
  }),
}));

test("Component Render Successfully", () => {
  render(<Article />);
  screen.getByText(/Election 2024 Polls: The Harris vs. Trump Matchup/);
  screen.getByText(
    /Our polling averages track the latest trends in the presidential race, using data from national and battleground state polls./
  );
  screen.getByText(/New York Times/i);
  screen.getByText(/Election 2024 Polls: The Harris vs. Trump Matchup/i);
});
