import reducer, {
  toggleIsActive,
  responseModal,
  resetModal,
} from "./modal.slice";

describe("modal slice", () => {
  test("initialState", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      isActive: false,
      response: false,
      id: null,
    });
  });

  test("action toggleIsActive", () => {
    const initialState = {
      isActive: false,
      response: false,
      id: null,
    };
    expect(reducer(initialState, toggleIsActive(1))).toEqual({
      isActive: true,
      response: false,
      id: 1,
    });
  });
  test("action responseModal", () => {
    const initialState = {
      isActive: true,
      response: false,
      id: 1,
    };

    expect(reducer(initialState, responseModal(true))).toEqual({
      isActive: true,
      response: true,
      id: 1,
    });
  });
  test("action resetModal", () => {
    const initialState = {
      isActive: true,
      response: true,
      id: 1,
    };

    expect(reducer(initialState, resetModal())).toEqual({
      isActive: false,
      response: false,
      id: null,
    });
  });
});
