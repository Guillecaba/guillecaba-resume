
interface TitleProps {
    children: React.ReactNode;
}



const Title: React.FC<TitleProps> = ({ children}) => {
    return <h2 className="uppercase mb-2 text-blue-800 tracking-wider font-semibold">{children}</h2>
}

export default Title