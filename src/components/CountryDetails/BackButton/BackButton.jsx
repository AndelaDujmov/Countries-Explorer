/**
 * BackButton Component
 * 
 * This component renders a button that allows users to navigate back to the previous page in the browser's history. 
 * The button contains a left arrow (`←`) icon and the text "Back to Main Menu".
 * 
 * When clicked, the button uses the `useNavigate` hook from `react-router-dom` to navigate to the previous page or 
 * history step.
 * This is useful for going back from a detailed view to the main menu or a previous page.
 * 
 * @component
 * @returns {JSX.Element} - The rendered back button element.
 * 
 * @example
 * <BackButton />
 */

import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <button 
            onClick={() => navigate(-1)} 
            className="flex items-center mb-4 text-blue-500 hover:text-blue-700 p-2"
        >
            <span className="text-2xl mr-2">←</span>
            <span>Back to Main Menu</span>
        </button>
    )
}

export default BackButton