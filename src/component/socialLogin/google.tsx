import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import Movemain, { MoveMainGoogle } from "./movemain";
import { ListProps } from "./list";
import { SocialLoginType } from "../login";

const clientID: string = "761025867741-vp5bsf5pk8s7aglkstlr1uf3gifhrad2.apps.googleusercontent.com";

const Google = ({ navigate, dispatch }: ListProps) => {
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientID,
                scope: "email",
            });
        };
        gapi.load("client:auth2", initClient);
    }, []);

    const onSuccess = async (res: any) => {
        console.log(res.profileObj);
        const memberInfo: SocialLoginType = {
            email: res.profileObj.email,
            name: res.profileObj.name,
            check: "false",
        };
        // await MoveMainGoogle(memberInfo,navigate,dispatch);
    };
    const onFailure = async (res: any) => {
        console.log(res);
    };

    return (
        <>
            <GoogleLogin
                clientId={clientID}
                buttonText="Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </>
    );
};

export default Google;
