const Button = ({type,text, children, className = "", onClick}) => {

    if(type==="Solid"){
        return (
          <button
            type="button"
            onClick={onClick}
            className={className || `
                px-2  max-h-12
                h-[8vw] w-[30vw]
                rounded-full
                text-white
                
                bg-cyan-700
                border border-cyan-300/20
          
                hover:border-cyan-100
                hover:shadow-[0_0_32px_rgba(0,213,255,0.6)]
                transition-all
                duration-300
                
                shadow-[inset_0_4px_10px_rgba(0,0,0,0.6),inset_0_-4px_10px_rgba(0,255,255,0.4)]

                text-[3vw] md:text-lg
                md:w-52 md:px-6
                
                hover:cursor-pointer`}
            >
            {children || text}
        </button>
        )
    }
    else{
        return (
            <div>

            </div>
        )
    }
}

export default Button
