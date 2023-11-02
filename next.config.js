const hostnames = [
    'github.com',
    'lh3.googleusercontent.com']

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: hostnames.map(hostname => ({
            protocol: 'https',
            hostname
        }))
    },
    env: {
        GOOGLE_ID: '211884311297-oasuoff16nl044v5helrd02520egh81b.apps.googleusercontent.com',
        GOOGLE_SECRET: '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',
        NEXTAUTH_URL: "http://localhost:3000/",
        NEXTAUTH_SECRET: 'say_lalisa_love_me_lalisa_love_me_hey'
    }
}

module.exports = nextConfig
