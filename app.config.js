export default {
  expo: {
    name: "react-chatter",
    slug: "react-chatter",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/logo.png",
    userInterfaceStyle: "light",
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "eugenechevski.reactchatter",
      googleServicesFile: process.env.GOOGLE_SERVICES_PLIST,
    },
    android: {
      package: "eugenechevski.reactchatter",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      bundler: "metro",
      favicon: "./assets/images/logo.png",
    },
    owner: "eugenechevski",
    extra: {
      eas: {
        projectId: "4642cea0-c9d7-4073-9b4f-8f3efaec2697",
      },
    },
    plugins: [
      "@react-native-firebase/app",
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "static",
          },
        },
      ],
      "expo-router",
    ],
    scheme: "reactchatter",
    experiments: {
      tsconfigPaths: true,
    },
  },
};
