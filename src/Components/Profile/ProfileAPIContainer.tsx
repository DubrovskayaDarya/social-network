import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserToProfile} from "../../redux/reducers/profile-reducer";
import {useParams} from "react-router";


class ProfileAPIContainer extends React.Component<any, any> {

    componentDidMount() {
        debugger;
        let {userId} = this.props.params;
        if (!userId) {
            userId = 2;
        }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
                withCredentials: true,
                headers: {
                    "API-KEY": `${process.env.REACT_APP_API_KEY}`
                }
            })
            .then(response => {
                this.props.setUserToProfile(response.data)
            })
    }

    render() {
        return <Profile
            backgroundInfo={this.props.backgroundInfo}
            defaultAvatar={this.props.defaultAvatar}
            user={this.props.user}/>;
    }
}


let mapStateToProps = (state: any) => {
    return {
        backgroundInfo: state.profilePage.background,
        user: state.profilePage.user,
        defaultAvatar: state.profilePage.defaultAvatar
    }
};

const WithUrlDataContainerComponent = (props: any) => (
    <ProfileAPIContainer {...props} params={useParams()}/>)

export const ProfileContainer = connect(mapStateToProps, {setUserToProfile})(WithUrlDataContainerComponent);