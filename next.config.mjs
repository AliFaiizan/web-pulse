/** @type {import('next').NextConfig} */
const nextConfig = {
    crossOrigin: 'anonymous',	
    images: {
        domains: ['res.cloudinary.com','uploadthing.com','utfs.io','img.clerk.com','subdomain','files.stripe.com'],
    },
    reactStrictMode: false,
};

export default nextConfig;
