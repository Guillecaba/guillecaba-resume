
type ContainerProps = {
    children: React.ReactNode;
}


const Container: React.FC<ContainerProps> = ({children}) => {
    return <div className="p-6 lg:p-8">
        {children}
    </div>
}

export default Container