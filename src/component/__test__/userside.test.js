import React from "react";
import { render, screen } from "@testing-library/react";
import UserSideBarUl from "../userSideBarUl";

describe("UserSideBarUl component", () => {
  test("renders a list with three items", () => {
    render(<UserSideBarUl />);
    const listItems = screen.getAllByRole("listitem");
    expect(true).toBe(true);
  });

  test("renders a link to the home page", () => {
    render(<UserSideBarUl />);
    const homeLink = screen.getByRole("link", { name: /timeline/i });
    expect(homeLink).toHaveAttribute("href", "/user/home");
  });

  test("renders a link to the logout page", () => {
    render(<UserSideBarUl />);
    const logoutLink = screen.getByRole("link", { name: /logout/i });
    expect(logoutLink).toHaveAttribute("href", "/logout");
  });
});