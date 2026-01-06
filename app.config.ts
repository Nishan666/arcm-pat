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

function getAppIcon() {
  const appVariant = process.env.APP_VARIANT;
  if (appVariant === "prod") return "./assets/images/logo-prod.png";
  if (appVariant === "preprod")
    return "./assets/images/logo-preprod.png";
  if (appVariant === "qa") return "./assets/images/logo-qa.png";
  return "./assets/images/logo-develop.png";
}