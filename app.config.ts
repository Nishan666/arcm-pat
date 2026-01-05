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
    image: "./assets/splash-icon.png",
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
  },

  plugins: [
    "expo-font",
    [
      "expo-notifications",
      {
        icon: "./assets/icon.png",
        color: "#ffffff",
        defaultChannel: "default",
        enableBackgroundRemoteNotifications: false,
      },
    ],
  ],
};

function getBundleIdentifier() {
  const appVariant = process.env.APP_VARIANT;
  if (appVariant === "production") return "com.arcm.patient";
  if (appVariant === "pre-production") return "com.arcm.patient.beta";
  if (appVariant === "staging") return "com.arcm.patient.staging";
  return "com.arcm.patient.develop";
}

function getAppIcon() {
  const appVariant = process.env.APP_VARIANT;
  if (appVariant === "production") return "./assets/icon.png";
  if (appVariant === "pre-production")
    return "./assets/icon.png";
  if (appVariant === "staging") return "./assets/icon.png";
  return "./assets/icon.png";
}