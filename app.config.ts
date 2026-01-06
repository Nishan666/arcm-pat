import dotenv from "dotenv";

dotenv.config();

//Permission
const PERMISSIONS = {
  notifications:
    "We use notifications to keep you updated about important alerts.",
};

export default {
  name: "arcm-pat",
  slug: "arcm-pat",
  version: "1.0.0",
  orientation: "portrait",
  icon: getAppIcon(),
  splash: {
    image: getAppIcon(),
    resizeMode: "cover",
    backgroundColor: "#000000",
  },
  scheme: getBundleIdentifier(),
  userInterfaceStyle: "automatic",

  ios: {
    supportsTablet: false,
    bundleIdentifier: getBundleIdentifier(),
    icon: getAppIcon(),
    infoPlist: {
      NSUserNotificationUsageDescription: PERMISSIONS.notifications,
    },
  },

  android: {
    package: getBundleIdentifier(),
    edgeToEdgeEnabled: true,
    icon: getAppIcon(),
    adaptiveIcon: {
      foregroundImage: getAdaptiveIcon(),
      backgroundColor: "#ffffff",
    },
  },

  plugins: [
    "expo-font",
    [
      "expo-notifications",
      {
        icon: getAppIcon(),
        color: "#ffffff",
        defaultChannel: "default",
        enableBackgroundRemoteNotifications: false,
      },
    ],
  ],
};

function getBundleIdentifier() {
  const appVariant = process.env.APP_VARIANT;
  if (appVariant === "prod") return "com.arcm.patient";
  if (appVariant === "preprod") return "com.arcm.patient.preprod";
  if (appVariant === "qa") return "com.arcm.patient.qa";
  return "com.arcm.patient.develop";
}

function getAssetPath(prefix: string) {
  const appVariant = process.env.APP_VARIANT;
  if (appVariant === "prod") return `./assets/images/${prefix}-prod.png`;
  if (appVariant === "preprod") return `./assets/images/${prefix}-preprod.png`;
  if (appVariant === "qa") return `./assets/images/${prefix}-qa.png`;
  return `./assets/images/${prefix}-develop.png`;
}

function getAppIcon() {
  return getAssetPath("logo");
}

function getAdaptiveIcon() {
  return getAssetPath("adaptive-icon");
}