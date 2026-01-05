import dotenv from "dotenv";

dotenv.config();

//Permission
const PERMISSIONS = {
  camera:
    "Camera access is needed to capture images for the questionnaire form and floorplan.",
  faceID: "Face ID is used to securely authenticate access to the app.",
  locationAlways:
    "Allows background location to autofill the questionnaire form fields.",
  locationWhenInUse:
    "Location is used to autofill current position in the questionnaire form and floorplan.",
  locationAlwaysAndWhenInUse:
    "Used to autofill fields based on current location during form filling.",
  photoLibrary:
    "Photo library access is used to browse and upload media for the questionnaire and floorplan.",
  photoLibraryAdd:
    "Allows saving captured or edited media from the questionnaire and floorplan.",
  microphone: "Allow $(PRODUCT_NAME) to access your microphone.",
  nfc: "NFC is used to scan Halspan tags to retrieve asset information and submit it as part of the questionnaire.",
  notifications:
    "We use notifications to keep you updated about important alerts.",
  faceIDPermission: "Allow $(PRODUCT_NAME) to use Face ID/ Touch ID.",
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
      ITSAppUsesNonExemptEncryption: false,
      NSUserNotificationUsageDescription: PERMISSIONS.notifications,
      NSCameraUsageDescription: PERMISSIONS.camera,
      NSFaceIDUsageDescription: PERMISSIONS.faceID,
      NSLocationAlwaysAndWhenInUseUsageDescription:
        PERMISSIONS.locationAlwaysAndWhenInUse,
      NSLocationAlwaysUsageDescription: PERMISSIONS.locationAlways,
      NSLocationWhenInUseUsageDescription: PERMISSIONS.locationWhenInUse,
      NSPhotoLibraryUsageDescription: PERMISSIONS.photoLibrary,
      NSPhotoLibraryAddUsageDescription: PERMISSIONS.photoLibraryAdd,
      NFCReaderUsageDescription: PERMISSIONS.nfc,
    },
  },

  android: {
    package: getBundleIdentifier(),
    edgeToEdgeEnabled: true,
  },

  plugins: [
    "expo-font",
    [
      "react-native-nfc-manager",
      {
        includeNdefEntitlement: false,
      },
    ],
    [
      "expo-local-authentication",
      {
        faceIDPermission: PERMISSIONS.faceIDPermission,
      },
    ],
    [
      "expo-image-picker",
      {
        photosPermission: PERMISSIONS.photoLibrary,
      },
    ],
    [
      "expo-av",
      {
        microphonePermission: PERMISSIONS.microphone,
      },
    ],
    [
      "expo-document-picker",
      {
        iCloudContainerEnvironment: "Production",
      },
    ],
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

  experiments: {
    typedRoutes: true,
  },
};

function getBundleIdentifier() {
  const appVariant = process.env.APP_VARIANT;
  if (appVariant === "production") return "com.arcm.pat.app";
  if (appVariant === "pre-production") return "com.arcm.pat.app.preproduction";
  if (appVariant === "staging") return "com.arcm.pat.app.qa";
  return "com.arcm.pat.app.develop";
}

function getAppIcon() {
  const appVariant = process.env.APP_VARIANT;
  if (appVariant === "production") return "./assets/icon.png";
  if (appVariant === "pre-production")
    return "./assets/icon.png";
  if (appVariant === "staging") return "./src/assets/icon.png";
  return "./assets/icon.png";
}