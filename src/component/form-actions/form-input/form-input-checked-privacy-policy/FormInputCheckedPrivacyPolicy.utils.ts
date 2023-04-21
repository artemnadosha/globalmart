export const validatePrivacyPolicy = (_: any, value: any) => {
  if (!value) {
    return Promise.reject("Please check the checkbox");
  }
  return Promise.resolve();
};
