/**
 * ImageContainer Component
 * 
 * This component is responsible for rendering an image, in this case, a country's flag. 
 * It takes two props:
 * - `pathname`: the source URL of the image (flag URL).
 * - `description`: a description or title for the image, typically the country's name, used in the `alt` 
 *    text for accessibility purposes.
 
 * @param {string} pathname - The URL path of the image (typically a flag image URL).
 * @param {string} description - A description for the image, usually the country's name.
 * 
 * @returns {JSX.Element} - The rendered image inside a styled container.
 * 
 * @example
 * <ImageContainer pathname="https://flagurl.com/flag.svg" description="Country Name" />
 */

const ImageContainer = ({ pathname, description }) => {
    return (
        <div className="image-container w-full sm:w-1/5 md:w-2xs lg:w-1/2">
            <img 
                src={pathname} 
                alt={`Flag of ${description}`} 
                className="w-full h-auto rounded-lg shadow-lg" 
            />
        </div>
    )
}

export default ImageContainer