export const getURL = ( ) => {
    const env = process.env.NODE_ENV
    if ( env == "development" ) {
        return process.env.NEXT_PUBLIC_BUILD_URL;
    } 
}