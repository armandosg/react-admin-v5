// AdminApp.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import AdminApp from "../AdminApp";

// Mock react-admin components
vi.mock("react-admin", async () => ({
  ...(await vi.importActual('react-admin')),
  Admin: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Resource: ({ name }: { name: string }) => (
    <div data-testid={`resource-${name}`}></div>
  ),
  ListGuesser: () => <div>ListGuesser</div>,
  EditGuesser: () => <div>EditGuesser</div>,
}));

describe("AdminApp", () => {
  it("renders resources for users, posts, and comments", () => {
    render(<AdminApp />);

    expect(screen.getByTestId("resource-users")).toBeInTheDocument();
    expect(screen.getByTestId("resource-posts")).toBeInTheDocument();
    expect(screen.getByTestId("resource-comments")).toBeInTheDocument();
  });

  // Add additional tests as needed for specific behavior
});
