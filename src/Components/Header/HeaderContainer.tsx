import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
                headers: {
                    "API-KEY": `${process.env.REACT_APP_API_KEY}`
                }
            })
            .then(response => {
                let {email, id, login} = response.data.data
                this.props.setAuthUserDataAC(id, email, login)
            })
    }

    render() {
        return <>
            <Header isAuth={this.props.isAuth} login={this.props.login} {...this.props}/>
        </>

    }
};

let mapStateToProps = (state: any) => {
    return {
        isAuth: state.authPage.isAuth,
        login: state.authPage.email
    }
}

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);