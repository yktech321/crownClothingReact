import './button.styles.scss'

/**
 * now we have to leverage this button component for three 
 * types of button that we are gonna use in our app
 * 
 * 1> default
 * 
 * 2> inverted 
 * 
 * 3> google sign-in 
 * 
 */

/**
 * we can do so by making a button types class 
 * having different class Names to the Button component
 * then calling them inside button container using eslint
 */

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}
/**
 * otherProps will have all the things of signUp form other than button 
 */
const Button = ({children, buttonType, ...otherProps}) => {
    return(
        // <button className="button-container">
        /**
         * rather than using the above we can
         */
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>
            {/* whatever p h1 etc text will come inside the children component here */}
            {children}
        </button>
    )
}

export default Button;