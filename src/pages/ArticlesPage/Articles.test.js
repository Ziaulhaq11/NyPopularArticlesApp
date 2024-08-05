import { render, screen } from "@testing-library/react";
import Articles from "./Articles";
import { mockData } from "../../mockData/data";

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: () => ({
    data: mockData.results,
    isLoading: false,
  }),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => <span>{children}</span>,
  useNavigate: () => ({
    navigate: () => {},
  }),
}));

describe("Articles Component Test Case", () => {
  test("Component Render Successfully", async () => {
    render(<Articles />);
    const header = await screen.findByText("NY Times Most Popular Articles");
    expect(header).toBeInTheDocument();
  });

  test("Data Rendering Properly or not", async () => {
    render(<Articles />);
    const title = await screen.findByText(
      `Election 2024 Polls: The Harris vs. Trump Matchup`
    );
    const description = await screen.findByText(
      `Our polling averages track the latest trends in the presidential race, using data from national and battleground state polls.`
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
