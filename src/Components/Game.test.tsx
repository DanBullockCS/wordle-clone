import { render, screen, fireEvent } from "@testing-library/react";
import Game from "./Game";
import userEvent from "@testing-library/user-event";
import { SetStateAction } from "react";

// Mock basic game components
jest.mock("./Game/InvisibleInput", () => (props: any) => (
  <input
    data-testid="invisible-input"
    onKeyDown={(e) => props.handleKeyPress(e.key)}
  />
));
jest.mock("./Game/Board", () => (props: any) => <div data-testid="board" />);
jest.mock("./Game/OnscreenKeyboard", () => (props: any) => (
  <div data-testid="onscreen-keyboard" />
));

describe("Game Component", () => {
  it("renders without crashing", () => {
    render(
      <Game
        modal={""}
        setModal={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByTestId("invisible-input")).toBeInTheDocument();
    expect(screen.getByTestId("board")).toBeInTheDocument();
    expect(screen.getByTestId("onscreen-keyboard")).toBeInTheDocument();
  });

  it("allows typing letters and updates current word", async () => {
    render(
      <Game
        modal={""}
        setModal={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const input = screen.getByTestId("invisible-input");

    await userEvent.type(input, "L");
    await userEvent.type(input, "O");
    await userEvent.type(input, "L");

    expect(input).toBeInTheDocument();
  });

  it("handles hitting backspace", async () => {
    render(
      <Game
        modal={""}
        setModal={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const input = screen.getByTestId("invisible-input");

    await userEvent.type(input, "A");
    await userEvent.type(input, "B");
    fireEvent.keyDown(input, { key: "Backspace" });
    fireEvent.keyDown(input, { key: "Backspace" });

    expect(input).toBeInTheDocument();
  });
});
