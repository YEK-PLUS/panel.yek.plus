/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  // define api side env variables
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    FIREBASE_type: process.env.FIREBASE_type,
    FIREBASE_project_id: process.env.FIREBASE_project_id,
    FIREBASE_private_key_id: process.env.FIREBASE_private_key_id,
    FIREBASE_private_key: process.env.FIREBASE_private_key,
    FIREBASE_client_email: process.env.FIREBASE_client_email,
    FIREBASE_client_id: process.env.FIREBASE_client_id,
    FIREBASE_auth_uri: process.env.FIREBASE_auth_uri,
    FIREBASE_token_uri: process.env.FIREBASE_token_uri,
    FIREBASE_auth_provider_x509_cert_url: process.env.FIREBASE_auth_provider_x509_cert_url,
    FIREBASE_client_x509_cert_url: process.env.FIREBASE_client_x509_cert_url,
  },
}

module.exports = nextConfig
