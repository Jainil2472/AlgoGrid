const variantClasses = {
    primary: ' bg-primary text-white border-2 border-primary shadow-sm rounded-md hover:bg-white hover:text-black ',
    secondary: '',
    last: ' bg-white text-primary border-2 border-primary shadow-sm rounded-md hover:bg-white hover:text-black '
}

const sizeClasses = {
    lg : 'w-full h-11 text-lg',
    md : 'w-20 h-11 text-sm font-medium',
    sm : 'w-20 h-8 text-sm font-normal'
}

function Button({
    children,
    size = 'lg',    
    variant ='primary',
    type = 'button',
    className = ''
}){

    return(
    <button type={type} className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
        {children}
    </button>
    );
}
export default Button;