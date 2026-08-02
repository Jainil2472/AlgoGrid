const sizeclass = {
    full : 'h-11 w-full px-4 p-3 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#4F86C6] focus:ring-2 focus:ring-[#4F86C6] transition-all duration-500',
}

function InputField({
    onChange,
    onBlur,
    Size = 'full',
    type='text',
    placeholder = '',
    children,
    error,
}){
    return(
        <input type={type} className={`${sizeclass[Size]} ${error ? "border-red-500  focus:border-red-500 focus:ring-red-500" : ""}`} placeholder={placeholder} onBlur={onBlur} onChange={onChange} />
    );
}
export default InputField