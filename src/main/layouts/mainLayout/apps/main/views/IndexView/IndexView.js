import BaseView from "../../../../../../../core/generics/views/base/BaseView";
import HomeSelection from "./components/selections/HomeSelection/HomeSelection";
import AboutSelection from "./components/selections/AboutSelection/AboutSelection";
import InfoSelection from "./components/selections/InfoSelection/InfoSelection";
import ReviewSelection from "./components/selections/ReviewSelection/ReviewSelection";


class IndexView extends BaseView {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params.blockName) {
            this.scrollTo(this.props.params.blockName)
        }
    }

    componentDidMount() {
        if (this.props.params.blockName) {
            this.scrollTo(this.props.params.blockName)
        }
    }

    scrollTo(id) {
        let menu = document.getElementById("HMenu")
        let element = document.getElementById(id)

        window.scrollTo({
            top: element.offsetTop - menu.offsetHeight,
            behavior: 'smooth',
        });
    }

    renderView() {

        return (
            <>
                <div className="d-flex flex-column w-100">
                    <HomeSelection />
                    <AboutSelection />
                    <InfoSelection />
                    <ReviewSelection />
                </div>
            </>
        )
    }
}


export default IndexView
