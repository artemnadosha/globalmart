import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../index";

const handleClick = jest.fn();

describe("component button", () => {
  test("spapshot", () => {
    const { container } = render(<Button type="primary" />);
    expect(container).toMatchSnapshot();
  });

  test("button children", () => {
    render(<Button type="primary">Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  test("Checking props type primary", () => {
    render(<Button type="primary">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("ant-btn-primary");
  });
  test("Checking props type default", () => {
    render(<Button type="default">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("ant-btn-default");
  });
  test("Checking props type link", () => {
    render(<Button type="link">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("ant-btn-link");
  });
  test("Checking props type dashed", () => {
    render(<Button type="dashed">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("ant-btn-dashed");
  });
  test("Checking props type text", () => {
    render(<Button type="text">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("ant-btn-text");
  });
  test("Checking props ghost true", () => {
    render(
      <Button type="primary" ghost={true}>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass("ant-btn-background-ghost");
  });
  test("Checking props ghost false", () => {
    render(
      <Button type="primary" ghost={false}>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).not.toHaveClass(
      "ant-btn-background-ghost"
    );
  });
  test("Checking props danger true", () => {
    render(
      <Button type="primary" danger={true}>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass("ant-btn-dangerous");
  });
  test("Checking props danger false", () => {
    render(
      <Button type="primary" danger={false}>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).not.toHaveClass("ant-btn-dangerous");
  });
  test("Checking props htmlType submit", () => {
    render(
      <Button type="primary" htmlType="submit">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
  test("Checking props htmlType button", () => {
    render(
      <Button type="primary" htmlType="button">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });
  test("Checking props htmlType reset", () => {
    render(
      <Button type="primary" htmlType="reset">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });
  test("Checking props textAlign center", () => {
    render(
      <Button type="primary" textAlign="center">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveStyle("text-align: center");
  });
  test("Checking props textAlign left", () => {
    render(
      <Button type="primary" textAlign="left">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveStyle("text-align: left");
  });
  test("Checking props textAlign right", () => {
    render(
      <Button type="primary" textAlign="right">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveStyle("text-align: right");
  });
  test("Button onClick", () => {
    render(
      <Button type="primary" textAlign="right" onClick={handleClick}>
        Click me
      </Button>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toBeCalled();
  });
});
