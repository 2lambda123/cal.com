import { test } from "../../lib/fixtures";
import { initialCommonSteps } from "../utils/bookingUtils";

test.describe.configure({ mode: "parallel" });

test.afterEach(({ users }) => users.deleteAll());

test.describe("Booking With Checkbox Question and Radio group Question", () => {
  const bookingOptions = { hasPlaceholder: false, isRequired: true };
  test("Checkbox and Radio group required", async ({ page, users }) => {
    await initialCommonSteps(
      page,
      "boolean",
      users,
      "radio",
      "Test Checkbox question and Radio group question (both required)",
      bookingOptions
    );
  });

  test("Checkbox and Radio group not required", async ({ page, users }) => {
    await initialCommonSteps(
      page,
      "boolean",
      users,
      "radio",
      "Test Checkbox question and Radio group question (only checkbox required)",
      { ...bookingOptions, isRequired: false }
    );
  });
});