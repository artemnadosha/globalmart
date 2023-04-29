import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "../index";
import { store } from "../../store/store";
import { Provider } from "react-redux";

describe("modal", () => {
  test("spapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <Modal content="test" titleHeader="test" closeButton={false} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("modal render with props", () => {
    render(
      <Provider store={store}>
        <Modal content="content" titleHeader="title" closeButton={false} />
      </Provider>
    );

    expect(screen.getByText("content")).toBeInTheDocument();
    expect(screen.getByText("title")).toBeInTheDocument();

    const closeButton = screen.queryByTestId("close-button");
    expect(closeButton).not.toBeInTheDocument();
  });
  test("modal render with closeButton true", () => {
    render(
      <Provider store={store}>
        <Modal content="content" titleHeader="title" closeButton={true} />
      </Provider>
    );

    const closeButton = screen.queryByTestId("close-button");
    expect(closeButton).toBeInTheDocument();
  });
});
