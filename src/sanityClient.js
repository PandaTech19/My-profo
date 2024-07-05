import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'kxesusvs',
    dataset: 'production',
    useCdn: true,
});