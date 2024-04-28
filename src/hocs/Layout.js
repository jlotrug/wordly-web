import '../style/index.css'

const Layout = (props) => {


    return (
        <div className="main-style">
            {props.children}
        </div>
    )
}

export default Layout