import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {

   

    return (
        <div>
            <Header title={props.title} handle={props.handle} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;