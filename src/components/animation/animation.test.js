import { render } from "@testing-library/react";
import Animation from "./animation";


it("checkAnimation", () => {
    const { queryByTestId } = render(<Animation  />);
    const animation = queryByTestId("animation");
    expect(animation).toBeTruthy();
});