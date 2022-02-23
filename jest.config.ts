export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
   moduleNameMapper: {
     "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
